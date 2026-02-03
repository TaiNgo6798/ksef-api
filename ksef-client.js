const axios = require('axios');
const crypto = require('crypto');
const { XMLParser } = require('fast-xml-parser');

class KsefClient {
  constructor(config) {
    this.baseUrl = config.baseUrl;
    this.ksefToken = config.ksefToken;
    this.contextIdentifier = config.contextIdentifier;
    this.publicKeyPem = null;
    this.symmetricEncryptionKeyPem = null;
    this.accessToken = null;
    this.refreshToken = null;
    this.symmetricKey = null;
    this.sessionRef = null;
  }

  // ==================== Authentication Methods ====================

  async fetchPublicKey() {
    const response = await axios.get(`${this.baseUrl}/security/public-key-certificates`);
    const cert = response.data.find(c => c.usage.includes('KsefTokenEncryption'));
    if (!cert) throw new Error('No certificate found for token encryption');
    const base64 = cert.certificate;
    return '-----BEGIN CERTIFICATE-----\n' + base64.match(/.{1,64}/g).join('\n') + '\n-----END CERTIFICATE-----';
  }

  async fetchSymmetricEncryptionKey() {
    const response = await axios.get(`${this.baseUrl}/security/public-key-certificates`);
    const cert = response.data.find(c => c.usage.includes('SymmetricKeyEncryption'));
    if (!cert) throw new Error('No certificate found for symmetric key encryption');
    const base64 = cert.certificate;
    return '-----BEGIN CERTIFICATE-----\n' + base64.match(/.{1,64}/g).join('\n') + '\n-----END CERTIFICATE-----';
  }

  encryptToken(token, timestamp) {
    const timestampMs = new Date(timestamp).getTime();
    const plaintext = `${token}|${timestampMs}`;
    const encrypted = crypto.publicEncrypt(
      {
        key: this.publicKeyPem,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: 'sha256',
      },
      Buffer.from(plaintext, 'utf8')
    );
    return encrypted.toString('base64');
  }

  async generateChallenge() {
    const response = await axios.post(`${this.baseUrl}/auth/challenge`);
    return response.data;
  }

  async authenticate(challenge, timestamp) {
    const encryptedToken = this.encryptToken(this.ksefToken, timestamp);
    const response = await axios.post(`${this.baseUrl}/auth/ksef-token`, {
      challenge,
      contextIdentifier: this.contextIdentifier,
      encryptedToken,
    });
    return response.data;
  }

  async checkAuthStatus(referenceNumber, authToken) {
    const response = await axios.get(
      `${this.baseUrl}/auth/${referenceNumber}`,
      { headers: { Authorization: `Bearer ${authToken}` } }
    );
    return response.data;
  }

  async waitForAuthSuccess(referenceNumber, authToken) {
    for (let i = 0; i < 10; i++) {
      const status = await this.checkAuthStatus(referenceNumber, authToken);
      if (status.status.code === 200) return;
      if (status.status.code >= 400) throw new Error(status.status.description);
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
    throw new Error('Timeout');
  }

  async redeemTokens(authToken) {
    const response = await axios.post(
      `${this.baseUrl}/auth/token/redeem`,
      {},
      { headers: { Authorization: `Bearer ${authToken}` } }
    );
    this.accessToken = response.data.accessToken.token;
    this.refreshToken = response.data.refreshToken.token;
    return response.data;
  }

  async refreshAccessToken() {
    const response = await axios.post(
      `${this.baseUrl}/auth/token/refresh`,
      {},
      { headers: { Authorization: `Bearer ${this.refreshToken}` } }
    );
    this.accessToken = response.data.accessToken.token;
    return response.data;
  }

  async login() {
    if (!this.publicKeyPem) {
      this.publicKeyPem = await this.fetchPublicKey();
    }
    const challenge = await this.generateChallenge();
    const auth = await this.authenticate(challenge.challenge, challenge.timestamp);
    await this.waitForAuthSuccess(auth.referenceNumber, auth.authenticationToken.token);
    return await this.redeemTokens(auth.authenticationToken.token);
  }

  // ==================== Encryption Methods ====================

  generateSymmetricKey() {
    const key = crypto.randomBytes(32);
    const iv = crypto.randomBytes(16);
    this.symmetricKey = { key, iv };
    return this.symmetricKey;
  }

  encryptSymmetricKey() {
    if (!this.symmetricKey) throw new Error('Symmetric key not generated');
    if (!this.symmetricEncryptionKeyPem) throw new Error('Symmetric encryption key not fetched');
    return crypto.publicEncrypt(
      {
        key: this.symmetricEncryptionKeyPem,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: 'sha256',
      },
      this.symmetricKey.key
    ).toString('base64');
  }

  encryptInvoice(invoiceXml) {
    if (!this.symmetricKey) throw new Error('Symmetric key not generated');
    const cipher = crypto.createCipheriv('aes-256-cbc', this.symmetricKey.key, this.symmetricKey.iv);
    let encrypted = cipher.update(invoiceXml, 'utf8');
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return encrypted;
  }

  calculateHash(data) {
    return crypto.createHash('sha256').update(data).digest('base64');
  }

  // ==================== Session Methods ====================

  async openSession() {
    if (!this.accessToken) throw new Error('Not logged in');
    if (!this.symmetricEncryptionKeyPem) {
      this.symmetricEncryptionKeyPem = await this.fetchSymmetricEncryptionKey();
    }
    if (!this.symmetricKey) {
      this.generateSymmetricKey();
    }

    const encryptedKey = this.encryptSymmetricKey();
    const response = await axios.post(
      `${this.baseUrl}/sessions/online`,
      {
        formCode: {
          systemCode: 'FA (3)',
          schemaVersion: '1-0E',
          value: 'FA'
        },
        encryption: {
          encryptedSymmetricKey: encryptedKey,
          initializationVector: this.symmetricKey.iv.toString('base64')
        }
      },
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`
        }
      }
    );
    this.sessionRef = response.data.referenceNumber;
    return response.data;
  }

  async closeSession() {
    if (!this.sessionRef) throw new Error('No active session');
    await axios.post(
      `${this.baseUrl}/sessions/online/${this.sessionRef}/close`,
      {},
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`
        }
      }
    );
    const closedSessionRef = this.sessionRef;
    this.sessionRef = null;
    this.symmetricKey = null;
    return closedSessionRef;
  }

  // ==================== Invoice Methods ====================

  async sendInvoice(invoiceXml) {
    if (!this.sessionRef) throw new Error('No active session');
    if (!this.symmetricKey) throw new Error('Symmetric key not generated');

    const encryptedInvoice = this.encryptInvoice(invoiceXml);
    const invoiceHash = this.calculateHash(Buffer.from(invoiceXml, 'utf8'));
    const encryptedHash = this.calculateHash(encryptedInvoice);

    const response = await axios.post(
      `${this.baseUrl}/sessions/online/${this.sessionRef}/invoices`,
      {
        invoiceHash: invoiceHash,
        invoiceSize: Buffer.from(invoiceXml, 'utf8').length,
        encryptedInvoiceHash: encryptedHash,
        encryptedInvoiceSize: encryptedInvoice.length,
        encryptedInvoiceContent: encryptedInvoice.toString('base64'),
        offlineMode: false
      },
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`
        }
      }
    );
    return response.data;
  }

  async checkInvoiceStatus(invoiceRef, sessionRef = null) {
    const session = sessionRef || this.sessionRef;
    if (!session) throw new Error('No session reference provided');

    const response = await axios.get(
      `${this.baseUrl}/sessions/${session}/invoices/${invoiceRef}`,
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`
        }
      }
    );
    return response.data;
  }

  /**
   * Retrieves invoice data as JSON by KSeF number
   * @param {string} ksefNumber - The KSeF number of the invoice (e.g., "3343445677-20260108-0100E055554D-3C")
   * @returns {Promise<Object>} The invoice data as JSON
   */
  async getInvoice(ksefNumber) {
    if (!this.accessToken) throw new Error('Not logged in');

    const response = await axios.get(
      `${this.baseUrl}/invoices/ksef/${ksefNumber}`,
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`
        }
      }
    );

    // Parse XML to JSON
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: '@_'
    });
    return parser.parse(response.data);
  }

  /**
   * Maps Polish invoice field names to English
   * @param {Object} data - The invoice data object
   * @returns {Object} Invoice data with English field names
   */
  mapToEnglish(data) {
    const fieldMap = {
      // Root level
      'Faktura': 'Invoice',
      
      // Header (Naglowek)
      'Naglowek': 'Header',
      'KodFormularza': 'FormCode',
      'WariantFormularza': 'FormVariant',
      'DataWytworzeniaFa': 'InvoiceCreationDate',
      'SystemInfo': 'SystemInfo',
      
      // Subjects
      'Podmiot1': 'Seller',
      'Podmiot2': 'Buyer',
      'Podmiot3': 'ThirdParty',
      'DaneIdentyfikacyjne': 'IdentificationData',
      'NIP': 'TaxId',
      'Nazwa': 'Name',
      'Adres': 'Address',
      'KodKraju': 'CountryCode',
      'AdresL1': 'AddressLine1',
      'AdresL2': 'AddressLine2',
      'JST': 'LocalGovernmentUnit',
      'GV': 'GovernmentUnit',
      
      // Invoice data (Fa)
      'Fa': 'InvoiceData',
      'KodWaluty': 'CurrencyCode',
      'P_1': 'IssueDate',
      'P_2': 'InvoiceNumber',
      'P_13_1': 'NetAmount23',
      'P_13_2': 'NetAmount8',
      'P_13_3': 'NetAmount5',
      'P_13_4': 'NetAmount0',
      'P_13_5': 'NetAmountExempt',
      'P_14_1': 'VatAmount23',
      'P_14_2': 'VatAmount8',
      'P_14_3': 'VatAmount5',
      'P_15': 'GrossAmount',
      'RodzajFaktury': 'InvoiceType',
      
      // Annotations
      'Adnotacje': 'Annotations',
      'P_16': 'SelfBilling',
      'P_17': 'ReverseCharge',
      'P_18': 'SplitPayment',
      'P_18A': 'SplitPaymentMandatory',
      'Zwolnienie': 'Exemption',
      'P_19N': 'NoExemption',
      'NoweSrodkiTransportu': 'NewTransportMeans',
      'P_22N': 'NoNewTransportMeans',
      'P_23': 'MarginScheme',
      'PMarzy': 'MarginProcedure',
      'P_PMarzyN': 'NoMarginProcedure',
      
      // Invoice lines
      'FaWiersz': 'InvoiceLine',
      'NrWierszaFa': 'LineNumber',
      'P_7': 'Description',
      'P_8A': 'Unit',
      'P_8B': 'Quantity',
      'P_9A': 'UnitPrice',
      'P_9B': 'UnitPriceGross',
      'P_11': 'NetValue',
      'P_11Vat': 'VatValue',
      'P_12': 'VatRate'
    };

    const mapObject = (obj) => {
      if (obj === null || typeof obj !== 'object') {
        return obj;
      }

      if (Array.isArray(obj)) {
        return obj.map(item => mapObject(item));
      }

      const mapped = {};
      for (const [key, value] of Object.entries(obj)) {
        const newKey = fieldMap[key] || key;
        mapped[newKey] = mapObject(value);
      }
      return mapped;
    };

    return mapObject(data);
  }

  // ==================== Utility Methods ====================

  createMinimalInvoice(sellerNip, buyerNip, invoiceNumber) {
    const now = new Date();
    const dateStr = now.toISOString().split('T')[0];
    const timeStr = now.toISOString().split('T')[1].split('.')[0] + 'Z';

    return `<?xml version="1.0" encoding="UTF-8"?>
<Faktura xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://crd.gov.pl/wzor/2025/06/25/13775/" xmlns:etd="http://crd.gov.pl/xml/schematy/dziedzinowe/mf/2022/01/05/eD/DefinicjeTypy/">
  <Naglowek>
    <KodFormularza kodSystemowy="FA (3)" wersjaSchemy="1-0E">FA</KodFormularza>
    <WariantFormularza>3</WariantFormularza>
    <DataWytworzeniaFa>${dateStr}T${timeStr}</DataWytworzeniaFa>
    <SystemInfo>KSeF Demo</SystemInfo>
  </Naglowek>
  <Podmiot1>
    <DaneIdentyfikacyjne>
      <NIP>${sellerNip}</NIP>
      <Nazwa>Test Seller Company</Nazwa>
    </DaneIdentyfikacyjne>
    <Adres>
      <KodKraju>PL</KodKraju>
      <AdresL1>ul. Testowa 1, 00-000 Warszawa</AdresL1>
    </Adres>
  </Podmiot1>
  <Podmiot2>
    <DaneIdentyfikacyjne>
      <NIP>${buyerNip}</NIP>
      <Nazwa>Test Buyer Company</Nazwa>
    </DaneIdentyfikacyjne>
    <Adres>
      <KodKraju>PL</KodKraju>
      <AdresL1>ul. Testowa 2, 00-000 Warszawa</AdresL1>
    </Adres>
    <JST>2</JST>
    <GV>2</GV>
  </Podmiot2>
  <Fa>
    <KodWaluty>PLN</KodWaluty>
    <P_1>${dateStr}</P_1>
    <P_2>${invoiceNumber}</P_2>
    <P_13_1>100.00</P_13_1>
    <P_14_1>23.00</P_14_1>
    <P_15>123.00</P_15>
    <Adnotacje>
      <P_16>2</P_16>
      <P_17>2</P_17>
      <P_18>2</P_18>
      <P_18A>2</P_18A>
      <Zwolnienie>
        <P_19N>1</P_19N>
      </Zwolnienie>
      <NoweSrodkiTransportu>
        <P_22N>1</P_22N>
      </NoweSrodkiTransportu>
      <P_23>2</P_23>
      <PMarzy>
        <P_PMarzyN>1</P_PMarzyN>
      </PMarzy>
    </Adnotacje>
    <RodzajFaktury>VAT</RodzajFaktury>
    <FaWiersz>
      <NrWierszaFa>1</NrWierszaFa>
      <P_7>Test Item</P_7>
      <P_8A>szt</P_8A>
      <P_8B>1</P_8B>
      <P_9A>100.00</P_9A>
      <P_11>100.00</P_11>
      <P_11Vat>23.00</P_11Vat>
      <P_12>23</P_12>
    </FaWiersz>
  </Fa>
</Faktura>`;
  }
}

module.exports = KsefClient;

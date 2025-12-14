const axios = require('axios');
const crypto = require('crypto');
const KsefAuth = require('./ksef-auth');

class InvoiceProcess {
  constructor(config) {
    this.baseUrl = config.baseUrl;
    this.auth = new KsefAuth(config);
    this.accessToken = null;
  }

  async initialize() {
    const tokens = await this.auth.login();
    this.accessToken = tokens.accessToken.token;
  }

  async getSymmetricEncryptionKey() {
    const response = await axios.get(`${this.baseUrl}/api/v2/security/public-key-certificates`);
    const cert = response.data.find(c => c.usage.includes('SymmetricKeyEncryption'));
    if (!cert) throw new Error('No certificate found for symmetric key encryption');
    const base64 = cert.certificate;
    return '-----BEGIN CERTIFICATE-----\n' + base64.match(/.{1,64}/g).join('\n') + '\n-----END CERTIFICATE-----';
  }

  generateSymmetricKey() {
    const key = crypto.randomBytes(32);
    const iv = crypto.randomBytes(16);
    return { key, iv };
  }

  encryptSymmetricKey(symmetricKey, publicKeyPem) {
    return crypto.publicEncrypt(
      {
        key: publicKeyPem,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: 'sha256',
      },
      symmetricKey.key
    ).toString('base64');
  }

  createMinimalInvoice(sellerNip, buyerNip, invoiceNumber) {
    const now = new Date();
    const dateStr = now.toISOString().split('T')[0];
    const timeStr = now.toISOString().split('T')[1].split('.')[0];

    return `<?xml version="1.0" encoding="UTF-8"?>
<Faktura xmlns="http://crd.gov.pl/wzor/2023/06/29/12648/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:etd="http://crd.gov.pl/xml/schematy/dziedzinowe/mf/2023/06/29/eD/DefinicjeTypy/" xmlns:inv="http://crd.gov.pl/xml/schematy/dziedzinowe/mf/2023/06/29/eD/DefinicjeTypy/">
  <Naglowek>
    <KodFormularza kodSystemowy="FA (3)" wersjaSchemy="1-0E">FA</KodFormularza>
    <WariantFormularza>3</WariantFormularza>
    <DataWytworzeniaFa>${dateStr}T${timeStr}</DataWytworzeniaFa>
    <SystemInfo>KSeF</SystemInfo>
  </Naglowek>
  <Podmiot1>
    <DaneIdentyfikacyjne>
      <NIP>${sellerNip}</NIP>
    </DaneIdentyfikacyjne>
  </Podmiot1>
  <Podmiot2>
    <DaneIdentyfikacyjne>
      <NIP>${buyerNip}</NIP>
    </DaneIdentyfikacyjne>
  </Podmiot2>
  <Fa>
    <RodzajFaktury>VAT</RodzajFaktury>
    <P_1>${dateStr}</P_1>
    <P_2>${invoiceNumber}</P_2>
    <P_15>${dateStr}</P_15>
    <Adnotacje>
      <P_16>1</P_16>
    </Adnotacje>
    <Zwolnienie>
      <PodstawaPrawa>art. 106 ust. 1 ustawy</PodstawaPrawa>
      <Przyczyna>zwolnienie</Przyczyna>
    </Zwolnienie>
    <FakturaCtrl>
      <LiczbaWierszyFaktury>1</LiczbaWierszyFaktury>
      <SumaPoleFaktury>0</SumaPoleFaktury>
    </FakturaCtrl>
  </Fa>
  <Stopka>
    <StopkaCtrl>
      <ZnakKontrolny>0</ZnakKontrolny>
    </StopkaCtrl>
  </Stopka>
</Faktura>`;
  }

  encryptInvoice(invoiceXml, symmetricKey) {
    const cipher = crypto.createCipheriv('aes-256-cbc', symmetricKey.key, symmetricKey.iv);
    let encrypted = cipher.update(invoiceXml, 'utf8');
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return encrypted;
  }

  calculateHash(data) {
    return crypto.createHash('sha256').update(data).digest('base64');
  }

  async openSession(symmetricKey, publicKeyPem) {
    const encryptedKey = this.encryptSymmetricKey(symmetricKey, publicKeyPem);
    const response = await axios.post(
      `${this.baseUrl}/api/v2/sessions/online`,
      {
        formCode: {
          systemCode: 'FA (3)',
          schemaVersion: '1-0E',
          value: 'FA'
        },
        encryption: {
          encryptedSymmetricKey: encryptedKey,
          initializationVector: symmetricKey.iv.toString('base64')
        }
      },
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`
        }
      }
    );
    return response.data;
  }

  async sendInvoice(sessionRef, invoiceXml, symmetricKey) {
    const encryptedInvoice = this.encryptInvoice(invoiceXml, symmetricKey);
    const invoiceHash = this.calculateHash(Buffer.from(invoiceXml, 'utf8'));
    const encryptedHash = this.calculateHash(encryptedInvoice);

    const response = await axios.post(
      `${this.baseUrl}/api/v2/sessions/online/${sessionRef}/invoices`,
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

  async closeSession(sessionRef) {
    await axios.post(
      `${this.baseUrl}/api/v2/sessions/online/${sessionRef}/close`,
      {},
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`
        }
      }
    );
  }

  async checkSessionStatus(sessionRef) {
    const response = await axios.get(
      `${this.baseUrl}/api/v2/sessions/${sessionRef}`,
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`
        }
      }
    );
    return response.data;
  }

  async checkInvoiceStatus(sessionRef, invoiceRef) {
    const response = await axios.get(
      `${this.baseUrl}/api/v2/sessions/${sessionRef}/invoices/${invoiceRef}`,
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`
        }
      }
    );
    return response.data;
  }

  async processInvoice(sellerNip, buyerNip, invoiceNumber) {
    await this.initialize();
    
    const publicKeyPem = await this.getSymmetricEncryptionKey();
    const symmetricKey = this.generateSymmetricKey();
    
    const invoiceXml = this.createMinimalInvoice(sellerNip, buyerNip, invoiceNumber);
    
    const session = await this.openSession(symmetricKey, publicKeyPem);
    console.log('Session opened:', session.referenceNumber);
    
    const invoiceResponse = await this.sendInvoice(session.referenceNumber, invoiceXml, symmetricKey);
    console.log('Invoice sent:', invoiceResponse.referenceNumber);
    
    await this.closeSession(session.referenceNumber);
    console.log('Session closed');
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const sessionStatus = await this.checkSessionStatus(session.referenceNumber);
    console.log('Session status:', sessionStatus.status);
    
    const invoiceStatus = await this.checkInvoiceStatus(session.referenceNumber, invoiceResponse.referenceNumber);
    console.log('Invoice status:', invoiceStatus.status);
    
    if (invoiceStatus.upoDownloadUrl) {
      console.log('UPO available at:', invoiceStatus.upoDownloadUrl);
    }
    
    return {
      sessionRef: session.referenceNumber,
      invoiceRef: invoiceResponse.referenceNumber,
      invoiceStatus
    };
  }
}

module.exports = InvoiceProcess;


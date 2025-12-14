const axios = require('axios');
const crypto = require('crypto');
const KsefAuth = require('./ksef-auth');

async function getSymmetricEncryptionKey(baseUrl) {
    const response = await axios.get(`${baseUrl}/api/v2/security/public-key-certificates`);
    const cert = response.data.find(c => c.usage.includes('SymmetricKeyEncryption'));
    if (!cert) throw new Error('No certificate found for symmetric key encryption');
    const base64 = cert.certificate;
    return '-----BEGIN CERTIFICATE-----\n' + base64.match(/.{1,64}/g).join('\n') + '\n-----END CERTIFICATE-----';
}

function generateSymmetricKey() {
    const key = crypto.randomBytes(32);
    const iv = crypto.randomBytes(16);
    return { key, iv };
}

function encryptSymmetricKey(symmetricKey, publicKeyPem) {
    return crypto.publicEncrypt(
        {
            key: publicKeyPem,
            padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
            oaepHash: 'sha256',
        },
        symmetricKey.key
    ).toString('base64');
}

function createMinimalInvoice(sellerNip, buyerNip, invoiceNumber) {
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

function encryptInvoice(invoiceXml, symmetricKey) {
    const cipher = crypto.createCipheriv('aes-256-cbc', symmetricKey.key, symmetricKey.iv);
    let encrypted = cipher.update(invoiceXml, 'utf8');
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return encrypted;
}

function calculateHash(data) {
    return crypto.createHash('sha256').update(data).digest('base64');
}

async function openSession(baseUrl, accessToken, symmetricKey, publicKeyPem) {
    const encryptedKey = encryptSymmetricKey(symmetricKey, publicKeyPem);
    const response = await axios.post(
        `${baseUrl}/api/v2/sessions/online`,
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
                Authorization: `Bearer ${accessToken}`
            }
        }
    );
    return response.data;
}

async function sendInvoice(baseUrl, accessToken, sessionRef, invoiceXml, symmetricKey) {
    const encryptedInvoice = encryptInvoice(invoiceXml, symmetricKey);
    const invoiceHash = calculateHash(Buffer.from(invoiceXml, 'utf8'));
    const encryptedHash = calculateHash(encryptedInvoice);

    const response = await axios.post(
        `${baseUrl}/api/v2/sessions/online/${sessionRef}/invoices`,
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
                Authorization: `Bearer ${accessToken}`
            }
        }
    );
    return response.data;
}

async function closeSession(baseUrl, accessToken, sessionRef) {
    await axios.post(
        `${baseUrl}/api/v2/sessions/online/${sessionRef}/close`,
        {},
        {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }
    );
}

async function checkInvoiceStatus(baseUrl, accessToken, sessionRef, invoiceRef) {
    const response = await axios.get(
        `${baseUrl}/api/v2/sessions/${sessionRef}/invoices/${invoiceRef}`,
        {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }
    );
    return response.data;
}

async function main() {
    const NIP = process.env.NIP || '3343445677';
    const KSEF_TOKEN = process.env.KSEF_TOKEN || '20251214-EC-1471782000-63005C3E4E-38|nip-3343445677|a0d637b841fe4eb6a52ecec13f9ba9263826ce07df1646178acbf02a645ed9e0';
    const BUYER_NIP = process.env.BUYER_NIP || '1234567890';
    const INVOICE_NUMBER = process.env.INVOICE_NUMBER || `FA/TEST/${Date.now()}`;
    const baseUrl = 'https://ksef-test.mf.gov.pl';

    const auth = new KsefAuth({
        baseUrl: baseUrl,
        ksefToken: KSEF_TOKEN,
        contextIdentifier: {
            type: 'Nip',
            value: NIP,
        },
    });

    try {
        const tokens = await auth.login();
        console.log('Logged in successfully');
        console.log('Access Token:', tokens.accessToken.token.substring(0, 50) + '...');

        const accessToken = tokens.accessToken.token;
        const publicKeyPem = await getSymmetricEncryptionKey(baseUrl);
        const symmetricKey = generateSymmetricKey();
        const invoiceXml = createMinimalInvoice(NIP, BUYER_NIP, INVOICE_NUMBER);

        const session = await openSession(baseUrl, accessToken, symmetricKey, publicKeyPem);
        console.log('Session opened:', session.referenceNumber);

        const invoiceResponse = await sendInvoice(baseUrl, accessToken, session.referenceNumber, invoiceXml, symmetricKey);
        console.log('Invoice sent:', invoiceResponse.referenceNumber);

        await closeSession(baseUrl, accessToken, session.referenceNumber);
        console.log('Session closed');

        await new Promise(resolve => setTimeout(resolve, 2000));

        const invoiceStatus = await checkInvoiceStatus(baseUrl, accessToken, session.referenceNumber, invoiceResponse.referenceNumber);
        console.log('Invoice status:', invoiceStatus.status);

        if (invoiceStatus.upoDownloadUrl) {
            console.log('UPO available at:', invoiceStatus.upoDownloadUrl);
        }
    } catch (error) {
        console.error('Error:', error.message);
        if (error.response) {
            console.error('Response:', error.response.data);
        }
        process.exit(1);
    }
}

main();


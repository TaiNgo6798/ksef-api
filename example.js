require('dotenv').config();
const KsefClient = require('./ksef-client');

async function polling(executor, maxTry = 10) {
    for (let i = 0; i < maxTry; i++) {
        try {
            const result = await executor();
            if (result) return result;
        } catch (error) {
            await new Promise(resolve => setTimeout(resolve, 2000));
            console.log(`Try ${i + 1} of ${maxTry}`);
            continue;
        }
    }

    throw new Error('Timeout');
}

async function main() {
    // main inputs
    const baseUrl = 'https://api-test.ksef.mf.gov.pl/v2';
    const NIP = '3343445677';
    const KSEF_TOKEN = process.env.KSEF_TOKEN;

    // inputs for generate file
    const BUYER_NIP = '1234567890';
    const INVOICE_NUMBER = process.env.INVOICE_NUMBER || `FA/TEST/${Date.now()}`;

    const client = new KsefClient({
        baseUrl,
        ksefToken: KSEF_TOKEN,
        contextIdentifier: {
            type: 'Nip',
            value: NIP,
        },
    });

    try {
        // Login
        const tokens = await client.login();
        console.log('Logged in successfully');
        console.log('Access Token:', tokens.accessToken.token.substring(0, 50) + '...');

        // Open session
        const session = await client.openSession();
        console.log('Session opened:', session.referenceNumber);

        // Create and send invoice
        const invoiceXml = client.createMinimalInvoice(NIP, BUYER_NIP, INVOICE_NUMBER);
        const invoiceResponse = await client.sendInvoice(invoiceXml);
        console.log('Invoice sent:', invoiceResponse.referenceNumber);

        // Close session
        const closedSessionRef = await client.closeSession();
        console.log('Session closed');

        // Check invoice status
        const invoiceStatus = await client.checkInvoiceStatus(invoiceResponse.referenceNumber, closedSessionRef);
        console.log('Invoice status:', invoiceStatus.status);

        console.log('Invoice UPO URL:', JSON.stringify(invoiceStatus, null, 2));

        // Example: How to get a fresh UPO URL
        console.log('Note: To get a fresh UPO URL, just call checkInvoiceStatus() again.');
        console.log('The API regenerates the UPO URL on each GET request.\n');
    } catch (error) {
        console.error('Error:', error.message);
        if (error.response) {
            console.error('Response:', error.response.data);
        }
        process.exit(1);
    }
}

main();

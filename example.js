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
    const NIP = process.env.NIP || '3343445677';
    const KSEF_TOKEN = process.env.KSEF_TOKEN || '20251214-EC-1471782000-63005C3E4E-38|nip-3343445677|a0d637b841fe4eb6a52ecec13f9ba9263826ce07df1646178acbf02a645ed9e0';
    const BUYER_NIP = process.env.BUYER_NIP || '1234567890';
    const INVOICE_NUMBER = process.env.INVOICE_NUMBER || `FA/TEST/${Date.now()}`;
    const baseUrl = 'https://api-test.ksef.mf.gov.pl/v2';

    const client = new KsefClient({
        baseUrl: baseUrl,
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

        // console.log('\n=== Invoice Information ===');
        // console.log(JSON.stringify(invoiceStatus, null, 2));
        // console.log('==========================\n');

        // Fetch invoice metadata as JSON by KSeF number
        const invoiceData = await polling(() => client.getInvoice(invoiceStatus.ksefNumber), 10);
        const englishInvoice = client.mapToEnglish(invoiceData);
        console.log('=== Invoice Data (English) ===');
        console.log(JSON.stringify(englishInvoice, null, 2));
        console.log('==============================\n');

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

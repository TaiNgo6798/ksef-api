# KSeF Demo - Polish National e-Invoice System Integration

This repository demonstrates how to integrate with KSeF (Krajowy System e-Faktur), the Polish National e-Invoice System, using Node.js.

## 0. Requirements and Knowledge

### Requirements

#### System Requirements

- Node.js (v14 or higher)
- npm or yarn package manager

#### Dependencies

```json
{
  "axios": "^1.7.2"
}
```

#### Environment Variables

- `NIP` - Tax Identification Number (NIP) of the seller
- `KSEF_TOKEN` - KSeF authentication token (obtained from the Polish Ministry of Finance)
- `BUYER_NIP` - Tax Identification Number of the buyer (optional)
- `INVOICE_NUMBER` - Invoice number (optional, auto-generated if not provided)

### Knowledge Prerequisites

#### KSeF System Overview

KSeF is the Polish National e-Invoice System operated by the Ministry of Finance. It provides a centralized platform for sending, receiving, and storing electronic invoices in Poland.

#### Key Concepts

**KSeF Token**

- A credential issued by the Ministry of Finance
- Format: `{date}-{type}-{id}-{checksum}|{identifier}|{signature}`
- Used for authentication instead of traditional username/password
- Must be encrypted with the system's public key during authentication

**Session Management**

- KSeF uses online sessions for invoice submission
- Each session requires encryption setup with symmetric keys
- Sessions must be opened, used, and properly closed

**Encryption**

- **Asymmetric Encryption (RSA-OAEP-SHA256)**: Used for encrypting KSeF tokens and symmetric keys
- **Symmetric Encryption (AES-256-CBC)**: Used for encrypting invoice content
- **Hashing (SHA-256)**: Used for integrity verification of invoices

**Invoice Format**

- XML format based on Polish FA (Faktura) schema
- Schema version: 1-0E
- System code: FA (3)
- Must contain seller (Podmiot1), buyer (Podmiot2), and invoice details (Fa)

#### API Endpoints

- Base URL (Test): `https://ksef-test.mf.gov.pl`
- Base URL (Production): `https://ksef.mf.gov.pl`

**Main endpoints:**

- `POST /api/v2/auth/challenge` - Generate authentication challenge
- `POST /api/v2/auth/ksef-token` - Authenticate with KSeF token
- `GET /api/v2/auth/{referenceNumber}` - Check authentication status
- `POST /api/v2/auth/token/redeem` - Redeem access and refresh tokens
- `POST /api/v2/auth/token/refresh` - Refresh access token
- `GET /api/v2/security/public-key-certificates` - Get public key certificates
- `POST /api/v2/sessions/online` - Open an online session
- `POST /api/v2/sessions/online/{sessionRef}/invoices` - Send invoice
- `POST /api/v2/sessions/online/{sessionRef}/close` - Close session
- `GET /api/v2/sessions/{sessionRef}/invoices/{invoiceRef}` - Check invoice status

## 1. Authentication Flow

The KSeF authentication process involves multiple steps to ensure secure communication. Here's the detailed flow:

### Step-by-Step Authentication Process

```
┌─────────────┐
│   Client    │
└──────┬──────┘
       │
       │ 1. Fetch Public Key
       │ GET /api/v2/security/public-key-certificates
       ▼
┌─────────────────────────────────────────┐
│ Find certificate with usage:            │
│ "KsefTokenEncryption"                   │
│ Convert to PEM format                   │
└──────┬──────────────────────────────────┘
       │
       │ 2. Generate Challenge
       │ POST /api/v2/auth/challenge
       ▼
┌─────────────────────────────────────────┐
│ Receive:                                │
│ - challenge (string)                    │
│ - timestamp (ISO 8601)                  │
└──────┬──────────────────────────────────┘
       │
       │ 3. Encrypt KSeF Token
       ▼
┌─────────────────────────────────────────┐
│ - Convert timestamp to milliseconds     │
│ - Create plaintext: "token|timestamp"   │
│ - Encrypt with RSA-OAEP-SHA256          │
│ - Base64 encode                         │
└──────┬──────────────────────────────────┘
       │
       │ 4. Authenticate
       │ POST /api/v2/auth/ksef-token
       │ Body: {
       │   challenge,
       │   contextIdentifier: { type, value },
       │   encryptedToken
       │ }
       ▼
┌─────────────────────────────────────────┐
│ Receive:                                │
│ - referenceNumber                       │
│ - authenticationToken                   │
└──────┬──────────────────────────────────┘
       │
       │ 5. Poll Status (max 10 times)
       │ GET /api/v2/auth/{referenceNumber}
       │ Header: Authorization: Bearer {authToken}
       ▼
┌─────────────────────────────────────────┐
│ Wait for status code 200                │
│ (retry every 2 seconds)                 │
└──────┬──────────────────────────────────┘
       │
       │ 6. Redeem Tokens
       │ POST /api/v2/auth/token/redeem
       │ Header: Authorization: Bearer {authToken}
       ▼
┌─────────────────────────────────────────┐
│ Receive:                                │
│ - accessToken (expires in ~1 hour)      │
│ - refreshToken (long-lived)             │
└─────────────────────────────────────────┘
```

### Authentication Implementation

The authentication is implemented in `ksef-auth.js`:

**Key Methods:**

1. **`fetchPublicKey()`** - Retrieves the public key certificate from KSeF
   - Finds certificate with usage "KsefTokenEncryption"
   - Converts base64 certificate to PEM format

2. **`encryptToken(token, timestamp)`** - Encrypts KSeF token
   - Creates plaintext: `{token}|{timestamp_in_ms}`
   - Encrypts using RSA-OAEP with SHA-256
   - Returns base64-encoded encrypted data

3. **`generateChallenge()`** - Requests authentication challenge
   - No authentication required for this step
   - Returns challenge and timestamp

4. **`authenticate(challenge, timestamp)`** - Submits encrypted token
   - Sends encrypted token with context identifier
   - Returns reference number and authentication token

5. **`waitForSuccess(referenceNumber, authToken)`** - Polls authentication status
   - Checks status every 2 seconds
   - Maximum 10 attempts (20 seconds total)
   - Throws error on timeout or failure

6. **`redeemTokens(authToken)`** - Exchanges auth token for access/refresh tokens
   - Stores tokens internally
   - Returns both tokens with expiration times

7. **`refreshAccessToken()`** - Refreshes expired access token
   - Uses refresh token to obtain new access token
   - Updates stored access token

8. **`login()`** - Complete authentication flow
   - Orchestrates all steps above
   - Returns access and refresh tokens

### Usage Example

```javascript
const KsefAuth = require('./ksef-auth');

const auth = new KsefAuth({
  baseUrl: 'https://ksef-test.mf.gov.pl',
  ksefToken: 'YOUR_KSEF_TOKEN',
  contextIdentifier: {
    type: 'Nip',
    value: 'YOUR_NIP'
  }
});

const tokens = await auth.login();
const accessToken = tokens.accessToken.token;
```

## 2. Invoice Sending Flow

The invoice sending process requires opening a session, encrypting the invoice, sending it, and closing the session.

### Step-by-Step Invoice Process

```
┌─────────────┐
│   Client    │
└──────┬──────┘
       │
       │ 1. Authenticate
       │ (see Authentication Flow)
       ▼
┌─────────────────────────────────────────┐
│ Obtain access token                     │
└──────┬──────────────────────────────────┘
       │
       │ 2. Get Symmetric Encryption Key
       │ GET /api/v2/security/public-key-certificates
       ▼
┌─────────────────────────────────────────┐
│ Find certificate with usage:            │
│ "SymmetricKeyEncryption"                │
│ Convert to PEM format                   │
└──────┬──────────────────────────────────┘
       │
       │ 3. Generate Symmetric Key
       ▼
┌─────────────────────────────────────────┐
│ - Generate 32-byte AES key (random)     │
│ - Generate 16-byte IV (random)          │
└──────┬──────────────────────────────────┘
       │
       │ 4. Encrypt Symmetric Key
       ▼
┌─────────────────────────────────────────┐
│ - Encrypt AES key with RSA-OAEP-SHA256  │
│ - Using public key from step 2          │
│ - Base64 encode encrypted key           │
└──────┬──────────────────────────────────┘
       │
       │ 5. Open Session
       │ POST /api/v2/sessions/online
       │ Body: {
       │   formCode: {
       │     systemCode: "FA (3)",
       │     schemaVersion: "1-0E",
       │     value: "FA"
       │   },
       │   encryption: {
       │     encryptedSymmetricKey,
       │     initializationVector
       │   }
       │ }
       ▼
┌─────────────────────────────────────────┐
│ Receive:                                │
│ - sessionRef (reference number)         │
└──────┬──────────────────────────────────┘
       │
       │ 6. Create Invoice XML
       ▼
┌─────────────────────────────────────────┐
│ Generate XML according to FA schema     │
│ - Naglowek (Header)                     │
│ - Podmiot1 (Seller)                     │
│ - Podmiot2 (Buyer)                      │
│ - Fa (Invoice details)                  │
└──────┬──────────────────────────────────┘
       │
       │ 7. Encrypt Invoice
       ▼
┌─────────────────────────────────────────┐
│ - Encrypt XML with AES-256-CBC          │
│ - Using symmetric key from step 3       │
│ - Calculate SHA-256 hash of:            │
│   * Original XML                        │
│   * Encrypted content                   │
└──────┬──────────────────────────────────┘
       │
       │ 8. Send Invoice
       │ POST /api/v2/sessions/online/{sessionRef}/invoices
       │ Body: {
       │   invoiceHash,
       │   invoiceSize,
       │   encryptedInvoiceHash,
       │   encryptedInvoiceSize,
       │   encryptedInvoiceContent,
       │   offlineMode: false
       │ }
       ▼
┌─────────────────────────────────────────┐
│ Receive:                                │
│ - invoiceRef (reference number)         │
└──────┬──────────────────────────────────┘
       │
       │ 9. Close Session
       │ POST /api/v2/sessions/online/{sessionRef}/close
       ▼
┌─────────────────────────────────────────┐
│ Session closed successfully             │
└──────┬──────────────────────────────────┘
       │
       │ 10. Check Invoice Status
       │ GET /api/v2/sessions/{sessionRef}/invoices/{invoiceRef}
       ▼
┌─────────────────────────────────────────┐
│ Receive:                                │
│ - status (processing, accepted, etc.)   │
│ - upoDownloadUrl (if available)         │
│ UPO = Official Confirmation of Receipt  │
└─────────────────────────────────────────┘
```

### Invoice Process Implementation

The invoice sending process is implemented in `invoice-process.js` and `example.js`:

**Key Methods:**

1. **`getSymmetricEncryptionKey()`** - Gets public key for encrypting symmetric keys
   - Finds certificate with usage "SymmetricKeyEncryption"
   - Returns PEM-formatted certificate

2. **`generateSymmetricKey()`** - Creates encryption keys
   - Generates random 32-byte AES-256 key
   - Generates random 16-byte initialization vector (IV)

3. **`encryptSymmetricKey(symmetricKey, publicKeyPem)`** - Encrypts AES key
   - Uses RSA-OAEP-SHA256
   - Returns base64-encoded encrypted key

4. **`createMinimalInvoice(sellerNip, buyerNip, invoiceNumber)`** - Generates invoice XML
   - Creates XML according to Polish FA schema
   - Includes seller, buyer, and invoice line items
   - Follows schema version 1-0E

5. **`encryptInvoice(invoiceXml, symmetricKey)`** - Encrypts invoice content
   - Uses AES-256-CBC encryption
   - Returns encrypted binary data

6. **`calculateHash(data)`** - Computes SHA-256 hash
   - Used for integrity verification
   - Returns base64-encoded hash

7. **`openSession(baseUrl, accessToken, symmetricKey, publicKeyPem)`** - Opens online session
   - Sends encrypted symmetric key and IV
   - Returns session reference number

8. **`sendInvoice(baseUrl, accessToken, sessionRef, invoiceXml, symmetricKey)`** - Sends encrypted invoice
   - Encrypts invoice content
   - Calculates hashes for verification
   - Returns invoice reference number

9. **`closeSession(baseUrl, accessToken, sessionRef)`** - Closes the session
   - Must be called after invoice submission
   - Finalizes the session

10. **`checkInvoiceStatus(baseUrl, accessToken, sessionRef, invoiceRef)`** - Checks invoice processing status
    - Returns current status
    - Provides UPO download URL when available

### Invoice XML Structure

The invoice XML must conform to the Polish FA (Faktura) schema:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Faktura xmlns="http://crd.gov.pl/wzor/2025/06/25/13775/">
  <Naglowek>
    <KodFormularza kodSystemowy="FA (3)" wersjaSchemy="1-0E">FA</KodFormularza>
    <WariantFormularza>3</WariantFormularza>
    <DataWytworzeniaFa>2024-01-01T12:00:00Z</DataWytworzeniaFa>
    <SystemInfo>KSeF Demo</SystemInfo>
  </Naglowek>
  
  <Podmiot1>
    <DaneIdentyfikacyjne>
      <NIP>SELLER_NIP</NIP>
      <Nazwa>Seller Company Name</Nazwa>
    </DaneIdentyfikacyjne>
    <Adres>
      <KodKraju>PL</KodKraju>
      <AdresL1>Street Address</AdresL1>
    </Adres>
  </Podmiot1>
  
  <Podmiot2>
    <DaneIdentyfikacyjne>
      <NIP>BUYER_NIP</NIP>
      <Nazwa>Buyer Company Name</Nazwa>
    </DaneIdentyfikacyjne>
    <Adres>
      <KodKraju>PL</KodKraju>
      <AdresL1>Street Address</AdresL1>
    </Adres>
  </Podmiot2>
  
  <Fa>
    <KodWaluty>PLN</KodWaluty>
    <P_1>2024-01-01</P_1>
    <P_2>FA/001/2024</P_2>
    <P_13_1>100.00</P_13_1>
    <P_14_1>23.00</P_14_1>
    <P_15>123.00</P_15>
    <RodzajFaktury>VAT</RodzajFaktury>
    
    <FaWiersz>
      <NrWierszaFa>1</NrWierszaFa>
      <P_7>Product/Service Description</P_7>
      <P_8A>szt</P_8A>
      <P_8B>1</P_8B>
      <P_9A>100.00</P_9A>
      <P_11>100.00</P_11>
      <P_11Vat>23.00</P_11Vat>
      <P_12>23</P_12>
    </FaWiersz>
  </Fa>
</Faktura>
```

**Key XML Elements:**

- `Naglowek` - Header with form code and schema version
- `Podmiot1` - Seller information (NIP, name, address)
- `Podmiot2` - Buyer information (NIP, name, address)
- `Fa` - Invoice details
  - `P_1` - Invoice date
  - `P_2` - Invoice number
  - `P_13_1` - Net amount
  - `P_14_1` - VAT amount
  - `P_15` - Gross amount
  - `FaWiersz` - Invoice line items

### Usage Example

```javascript
const InvoiceProcess = require('./invoice-process');

const processor = new InvoiceProcess({
  baseUrl: 'https://ksef-test.mf.gov.pl',
  ksefToken: 'YOUR_KSEF_TOKEN',
  contextIdentifier: {
    type: 'Nip',
    value: 'YOUR_NIP'
  }
});

const result = await processor.processInvoice(
  'SELLER_NIP',
  'BUYER_NIP',
  'FA/001/2024'
);

console.log('Session:', result.sessionRef);
console.log('Invoice:', result.invoiceRef);
console.log('Status:', result.invoiceStatus.status);
```

### Running the Demo

**Using the simple example:**

```bash
NIP=YOUR_NIP KSEF_TOKEN=YOUR_TOKEN node example.js
```

**Using the class-based processor:**

```bash
NIP=YOUR_NIP KSEF_TOKEN=YOUR_TOKEN npm run invoice
```

## Security Considerations

1. **KSeF Token Protection**: Never commit KSeF tokens to version control. Always use environment variables or secure configuration management.

2. **Certificate Validation**: The system automatically fetches and validates public key certificates from KSeF.

3. **Token Expiration**: Access tokens expire after approximately 1 hour. Use the refresh token to obtain new access tokens.

4. **Encryption Standards**:
   - RSA-OAEP with SHA-256 for asymmetric encryption
   - AES-256-CBC for symmetric encryption
   - SHA-256 for hashing

5. **Session Management**: Always close sessions properly to avoid resource leaks.

## Troubleshooting

**Common Issues:**

1. **Authentication timeout**: Increase wait time or retry limit in `waitForSuccess()` method

2. **Invalid certificate**: Ensure you're using the correct public key certificate for the operation

3. **Invoice validation errors**: Verify XML structure matches the FA schema version 1-0E

4. **Encryption errors**: Check that symmetric keys are properly generated and encrypted

5. **Session errors**: Ensure session is opened before sending invoices and closed after completion

## References

- [KSeF Documentation Markdown - AI friendly](ksef-doc.md)
- [Ksef Documentation](https://api-test.ksef.mf.gov.pl/docs/v2/index.html)

## License

MIT

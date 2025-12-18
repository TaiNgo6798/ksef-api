const axios = require('axios');
const crypto = require('crypto');

class KsefAuth {
  constructor(config) {
    this.baseUrl = config.baseUrl;
    this.ksefToken = config.ksefToken;
    this.contextIdentifier = config.contextIdentifier;
    this.publicKeyPem = config.publicKeyPem;
    this.accessToken = null;
    this.refreshToken = null;
  }

  async fetchPublicKey() {
    const response = await axios.get(`${this.baseUrl}/security/public-key-certificates`);
    const cert = response.data.find(c => c.usage.includes('KsefTokenEncryption'));
    if (!cert) throw new Error('No certificate found for token encryption');
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

  async checkStatus(referenceNumber, authToken) {
    const response = await axios.get(
      `${this.baseUrl}/auth/${referenceNumber}`,
      { headers: { Authorization: `Bearer ${authToken}` } }
    );
    return response.data;
  }

  async waitForSuccess(referenceNumber, authToken) {
    for (let i = 0; i < 10; i++) {
      const status = await this.checkStatus(referenceNumber, authToken);
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
    await this.waitForSuccess(auth.referenceNumber, auth.authenticationToken.token);
    return await this.redeemTokens(auth.authenticationToken.token);
  }
}

module.exports = KsefAuth;


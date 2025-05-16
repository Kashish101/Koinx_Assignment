const { connect } = require('nats');
const { storeCryptoStats } = require('./services/fetchCrypto');

async function setupNats() {
  const nc = await connect({ servers: process.env.NATS_URL });
  const sub = nc.subscribe('crypto.update');
  for await (const msg of sub) {
    await storeCryptoStats();
  }
}

module.exports = setupNats;
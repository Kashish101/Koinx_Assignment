const axios = require('axios');
const CryptoStat = require('../models/CryptoStat');

const COINS = ['bitcoin', 'ethereum', 'matic-network'];

async function storeCryptoStats() {
  const url = `https://api.coingecko.com/api/v3/simple/price`;
  const params = {
    ids: COINS.join(','),
    vs_currencies: 'usd',
    include_market_cap: true,
    include_24hr_change: true
  };

  const { data } = await axios.get(url, { params });

  for (const coin of COINS) {
    await CryptoStat.create({
      coin,
      price: data[coin].usd,
      marketCap: data[coin].usd_market_cap,
      change24h: data[coin].usd_24h_change
    });
  }
}

module.exports = { storeCryptoStats };
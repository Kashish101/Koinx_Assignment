const CryptoStat = require('../models/CryptoStat');
const stdDev = require('../utils/stdDev');

async function getStats(req, res) {
  const { coin } = req.query;
  const stat = await CryptoStat.findOne({ coin }).sort({ createdAt: -1 });
  if (!stat) return res.status(404).send({ error: 'Data not found' });
  res.send({ price: stat.price, marketCap: stat.marketCap, "24hChange": stat.change24h });
}

async function getDeviation(req, res) {
  const { coin } = req.query;
  const stats = await CryptoStat.find({ coin }).sort({ createdAt: -1 }).limit(100);
  const prices = stats.map(s => s.price);
  const deviation = stdDev(prices);
  res.send({ deviation: +deviation.toFixed(2) });
}

module.exports = { getStats, getDeviation };
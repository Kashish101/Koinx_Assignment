const mongoose = require('mongoose');

const CryptoStatSchema = new mongoose.Schema({
  coin: String,
  price: Number,
  marketCap: Number,
  change24h: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('CryptoStat', CryptoStatSchema);
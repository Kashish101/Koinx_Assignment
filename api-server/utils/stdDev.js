function stdDev(prices) {
    const mean = prices.reduce((a, b) => a + b) / prices.length;
    return Math.sqrt(prices.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / prices.length);
  }
  
  module.exports = stdDev;
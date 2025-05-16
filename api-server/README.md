# API Server

### Setup
```bash
cd api-server
npm install
```

### Run
```bash
node index.js
```

### Endpoints
- `GET /stats?coin=bitcoin` – Fetch latest price, market cap, 24h change.
- `GET /deviation?coin=bitcoin` – Fetch standard deviation of last 100 prices.
# Worker Server

### Setup
```bash
cd worker-server
npm install
```

### Run
```bash
node index.js
```

### Description
- Publishes a `crypto.update` event to NATS every 15 minutes to trigger the API server to fetch fresh crypto stats.
- Also publishes once immediately on startup.

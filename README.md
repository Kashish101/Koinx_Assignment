# 💹 Koinx Backend Assignment

A two-service Node.js backend application that fetches and stores real-time cryptocurrency data using the CoinGecko API, processes it, and serves API endpoints for stats and deviation. Communication between services is handled using **NATS** messaging and data is stored in **MongoDB**.

---

## 🧱 Project Structure

koinx-backend-assignment/
├── api-server/ # Express API to serve crypto data
│ ├── controllers/ # API controller logic
│ ├── models/ # MongoDB Mongoose models
│ ├── routes/ # API routes
│ ├── services/ # CoinGecko fetch logic
│ ├── utils/ # Utility functions (e.g., std dev)
│ ├── natsSubscriber.js
│ ├── index.js # Express entry point
│ └── .env
│
├── worker-server/ # Publishes update events every 15 mins
│ ├── publisher.js # Publishes to NATS
│ ├── index.js # CRON scheduler
│ └── .env





---

## ⚙️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **NATS (Pub/Sub)**
- **Axios** (for API fetch)
- **node-cron** (scheduled task)
- **CoinGecko API** (data source)

---

## 🚀 Setup Instructions

### Prerequisites

- Node.js v14+
- MongoDB installed and running locally
- NATS Server running locally (port `4222` by default)

> You can install NATS locally from [nats.io](https://docs.nats.io/running-a-nats-service/introduction/installation)

---


🔁 How It Works

    worker-server publishes an event (crypto.update) every 15 minutes using node-cron.

    api-server listens to this event via NATS and fetches real-time data from the CoinGecko API.

    Fetched data is stored in MongoDB.

    Users can access stats and price deviation via API endpoints.


    🛠 Future Improvements

    Add Docker support with Docker Compose

    Add Redis cache for frequently hit endpoints

    Add Swagger/OpenAPI docs

    Add unit and integration tests

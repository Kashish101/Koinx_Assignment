const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const statsRoutes = require('./routes/stats');
const setupNats = require('./natsSubscriber');

const app = express();
app.use(express.json());
app.use('/', statsRoutes);

mongoose.connect(process.env.MONGO_URI, () => {
  console.log('MongoDB connected');
  setupNats();
  app.listen(process.env.PORT, () => console.log('API Server running')); 
});
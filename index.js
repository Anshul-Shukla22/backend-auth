require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const YOUR_MONGODB_CONNECTION_STRING = `${process.env.YOUR_MONGODB_CONNECTION_STRING}`;
const app = express();
const PORT = 3000;
const cron = require('node-cron');

mongoose.connect(YOUR_MONGODB_CONNECTION_STRING);

  cron.schedule('0 * * * *', () => {
    console.log('Cron job is running...');
  });

app.use(express.json());
app.use('/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

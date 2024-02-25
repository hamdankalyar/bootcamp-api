const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
//Route files
const bootcamps = require('./routes/bootcamps');

// load env vars
dotenv.config({ path: './config/config.env' });

// connect db
connectDB();
const app = express();

// Mount routers
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server in ${process.env.NODE_ENV} running on the port ${PORT}`
  )
);

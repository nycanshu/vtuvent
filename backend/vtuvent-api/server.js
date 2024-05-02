const express = require('express');
const mongoose = require('mongoose');
const Event = require('./models/event-model');
const routes = require('./routes/routes');
require('dotenv').config();
require('./config/db');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const PORT = process.env.PORT || 3000;

app.use(routes);

app.listen(PORT, () => {
  console.log('Server is running on port 3000');
});
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');
require('dotenv').config();

// Inicializing the app
const app = express();
app.use(express.json());
app.use(cors());

// Inicializing the database
const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
mongoose.connect(`mongodb+srv://${username}:${password}@cluster0-0xayi.gcp.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });
requireDir('../src/models');

// Routes
app.use('/api', require('../src/routes'));

module.exports = app;
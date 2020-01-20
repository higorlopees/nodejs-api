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
const uri = process.env.PROD_MONGODB;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
requireDir('../src/models');

// Routes
app.use('/api', require('../src/routes'));

module.exports = app;
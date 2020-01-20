const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

// Inicializing the app
const app = express();
app.use(express.json());
app.use(cors());

// Inicializing the database
mongoose.connect("mongodb+srv://production:KikSkHWd9rq3V9ff@cluster0-0xayi.gcp.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });
requireDir('../src/models');

// Routes
app.use('/api', require('../src/routes'));

module.exports = app;
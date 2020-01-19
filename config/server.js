const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

// Inicializing the app
const app = express();
app.use(express.json());
app.use(cors());

// Inicializing the database
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true });
requireDir('../src/models');

// Routes
app.use('/api', require('../src/routes'));

module.exports = app;
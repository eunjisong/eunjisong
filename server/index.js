'use strict'
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const volleyball = require('volleyball');
const app = express();

app.use(volleyball);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../node_modules')))

app.use('/api', require('./api'));

/// our router
app.use('/api', require('./api'));

app.use((err, req, res, next) => {
  res.status(500).send( err.message || 'err handling in server/index.js');
})

module.exports = app;

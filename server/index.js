'use strict'

const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const volleyball = require('volleyball');
const app = express()

//logging middleware
app.use(volleyball)

//body parsing
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true }))

//static middleware
app.use(express.static(path.join(__dirname, '../public')))

/// our router
app.use('/api', require('./api'));

app.use((err, req, res, next)=>{
  res.status(500).send(err.message || 'error handling in intex.js occurred');
})

module.exports = app;

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

/// our router // backend middleware
app.use('/api', require('./api'));

// frontend middleware: // Send index.html for any other requests
app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.use((err, req, res, next) => {
  res.status(500).send( err.message || 'err handling in server/index.js');
})

module.exports = app;

// frontend 연결하는 법
// 1. 미들웨어 넣는 인덱스 파일에 GET:'*'로 인덱스.html을 sendFile하자
// 2. webpack을 셋업하자. 웹팩 config파일에 파일 위치와 이름을 잘 연결해야 한다.


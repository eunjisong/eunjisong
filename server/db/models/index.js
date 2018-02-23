// 여기서 모든 db가 나가고, 기본이 되는 곳이다. 여기서 association을 확실히 한다.
const db = require('../index');
const Artwork = require('./artwork');
const Coding = require('./coding');



module.exports = db;


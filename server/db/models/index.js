// 여기서 모든 db가 나가고, 기본이 되는 곳이다. 여기서 association을 확실히 한다.
const db = require('../index');
const Photo = require('./photo')
const Livingroom = require('./livingroom')
const Bedroom = require('./bedroom')
const Product = require('./product')

Livingroom.belongsTo(Photo)
Bedroom.belongsTo(Photo)
Product.belongsTo(Photo)


module.exports = db;

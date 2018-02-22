const Sequelize = require('sequelize');
const db = require('../index');

const Product = db.define('product', {
  type: {
    type: Sequelize.STRING
  },
  url: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  }
})

module.exports = Product

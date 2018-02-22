const Sequelize = require('sequelize');
const db = require('../index');

module.exports = db.define('artwork', {
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  }
})

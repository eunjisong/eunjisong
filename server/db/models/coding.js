const Sequelize = require('sequelize');
const db = require('../index');

const Livingroom = db.define('livingroom', {
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

module.exports = Livingroom

const Sequelize = require('sequelize');
const db = require('../index');

const Bedroom = db.define('bedroom', {
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

module.exports = Bedroom

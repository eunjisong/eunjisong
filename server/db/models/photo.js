const Sequelize = require('sequelize');
const db = require('../index');

const Photo = db.define('photo', {
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

module.exports = Photo

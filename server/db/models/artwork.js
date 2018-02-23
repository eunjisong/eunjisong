const Sequelize = require('sequelize');
const db = require('../index');

const Artwork = db.define('artwork', {
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  }
})

module.exports = Artwork

const Sequelize = require('sequelize');
const db = require('../index');

const Coding = db.define('coding', {
  url: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
  }
})

module.exports = Coding

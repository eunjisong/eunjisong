const Sequelize = require('sequelize');

module.exports = new Sequelize('postgres://localhost:5432/photo', { logging: false });

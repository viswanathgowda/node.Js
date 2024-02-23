const Sequelize = require('sequelize')

const sequelize = new Sequelize('node-complete', 'root', 'Vishwa@123', {dialect: 'mysql', host: 'localhost'})

module.exports = sequelize
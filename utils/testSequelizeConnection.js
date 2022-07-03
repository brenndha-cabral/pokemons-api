require('dotenv').config();
const Sequelize = require('sequelize');
const configToTest = require('../src/database/config/config')[process.env.NODE_ENV];

const sequelize = new Sequelize(configToTest);

sequelize
  .authenticate()
  .then(() => console.log('Connection was successfully established.'))
  .catch((error) => console.log('Unable to connect to the database: \n', error));

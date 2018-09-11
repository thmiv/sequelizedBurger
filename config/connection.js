// connections information
require("dotenv").config();
const dbLogin = require("../login.js");

// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
var sequelize = new Sequelize("vrogcgqqxfyly3sk", dbLogin.eatDb.username, dbLogin.eatDb.password, {
  host: dbLogin.eatDb.host,
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Exports the connection for other files to use
module.exports = sequelize;

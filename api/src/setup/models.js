const { Sequelize } = require("sequelize");
const {
  database,
  username,
  password,
  host,
  dialect,
} = require("../config/db.js");

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: dialect,
});

module.exports=sequelize

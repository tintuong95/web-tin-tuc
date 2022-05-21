const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../../setup/models.js");

const User = sequelize.define("User", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports=User

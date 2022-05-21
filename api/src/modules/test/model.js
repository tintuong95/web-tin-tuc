const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../../setup/models.js");

const Tests = sequelize.define("Tests", {
  title: {
    type: DataTypes.ARRAY(DataTypes.NUMBER),
    allowNull: false,
  },
});

module.exports = Tests;

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../../setup/models.js");
const Posts = require("../post/model.js");

const Categorys = sequelize.define("Categorys", {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});



module.exports = Categorys;

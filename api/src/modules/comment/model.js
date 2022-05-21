const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../../setup/models.js");

const Comments = sequelize.define("Comments", {
  // Model attributes are defined here
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  iduser: {
    type: DataTypes.INTEGER,
    // allowNull defaults to true
  },
  idpost: {
    type: DataTypes.INTEGER,
    // allowNull defaults to true
  },
});

module.exports=Comments

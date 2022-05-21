const { DataTypes } = require("sequelize");
const sequelize = require("../../setup/models.js");
const Categorys = require("../category/model.js");

const Posts = sequelize.define("Posts", {

  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  summary: {
    type: DataTypes.STRING,
    // allowNull defaults to true
  },
  content: {
    type: DataTypes.TEXT("long"),
    // allowNull defaults to true
  },
  img: {
    type: DataTypes.STRING,
    // allowNull defaults to true
  },
  idcategory: {
    type: DataTypes.INTEGER,
    
    // allowNull defaults to true
  }
});


module.exports = Posts;

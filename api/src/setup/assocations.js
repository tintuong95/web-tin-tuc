
const Posts=require("../modules/post/model.js")
const Categorys=require("../modules/category/model.js")


Posts.belongsTo(Categorys,{ foreignKey: "idcategory",as:"category" })
Categorys.hasMany(Posts,{ foreignKey: "idcategory", as:"category" })
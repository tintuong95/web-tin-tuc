const express=require("express")
const { userGetAll, userGetById, userCreate, userUpdateById, userRemoveById, signIn } = require("./query.js")

const userRouter=express.Router()

userRouter.put("/:id",userUpdateById)

userRouter.delete("/:id",userRemoveById)

userRouter.get("/:id",userGetById)

userRouter.get("/",userGetAll)

userRouter.post("/",userCreate)

userRouter.post("/signin",signIn)







module.exports=userRouter
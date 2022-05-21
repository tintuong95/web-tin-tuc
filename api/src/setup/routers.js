const express =require("express")

const postRouter = require("../modules/post/router.js")
const userRouter = require("../modules/user/router.js")
const categoryRouter=require("../modules/category/router.js")
const commentRouter = require("../modules/comment/router.js")

const rootRouter=express.Router()

rootRouter.use("/user",userRouter)

rootRouter.use("/post",postRouter)

rootRouter.use("/category",categoryRouter)

rootRouter.use("/comment",commentRouter)

module.exports=rootRouter
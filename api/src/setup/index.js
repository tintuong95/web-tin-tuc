const express = require("express");
const sequelize = require("./models.js");
const rootRouter = require("./routers.js");
const setupServer = require("./startServer.js");
const {loadModules, upload} =require("./loadModule.js");


require("./assocations.js")


const app = express();

sequelize.sync({alter:true}) //đồng bộ hóa với database

loadModules(app)

app.use("/api",rootRouter)

setupServer(app)

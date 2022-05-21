const express = require("express");
const { authentication } = require("../../setup/author.js");
const { upload } = require("../../setup/loadModule.js");
const { postGetAll, postCreate, postGetById, postDeleteById, postUpdateById, postGetLimit, postGetLimitByCategory, postSearch } = require("./query.js");

const postRouter = express.Router();

postRouter.get("/search", postSearch);

postRouter.put("/:id",authentication, postUpdateById);

postRouter.delete("/:id",authentication, postDeleteById);

postRouter.get("/limit/:id", postGetLimitByCategory);

postRouter.get("/limit", postGetLimit);

postRouter.get("/:id", postGetById);

postRouter.get("/", postGetAll);

postRouter.post("/",upload.single("img"),postCreate)

module.exports = postRouter;

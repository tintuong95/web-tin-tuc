const express = require("express");
const { authentication } = require("../../setup/author.js");
const {
  commentGetAll,
  commentCreate,
  commentGetById,
  commentUpdateById,
  commentRemoveById,
  commentByIdPost,
} = require("./query.js");

const commentRouter = express.Router();

commentRouter.post("/",authentication, commentCreate);

commentRouter.get("/:id", commentGetById);

commentRouter.put("/:id",authentication, commentUpdateById);

commentRouter.delete("/:id",authentication, commentRemoveById);

commentRouter.get("/", commentGetAll);

commentRouter.get("/comment",commentByIdPost)

module.exports = commentRouter;

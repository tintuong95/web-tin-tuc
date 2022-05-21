const express = require("express");
const {
  categoryGetAll,
  categoryCreate,
  categoryGetById,
  categoryUpdateById,
  categoryRemoveById,
} = require("./query.js");

const categoryRouter = express.Router();

categoryRouter.get("/:id", categoryGetById);

categoryRouter.get("/", categoryGetAll);

categoryRouter.post("/", categoryCreate);

categoryRouter.put("/:id", categoryUpdateById);

categoryRouter.delete("/:id", categoryRemoveById);

module.exports = categoryRouter;

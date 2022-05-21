const Categorys = require("../category/model.js");
const Posts = require("./model.js");
const { Op } = require("sequelize");
const postGetAll = async (req, res) => {
  try {
    const response = await Posts.findAll({
      include: {
        model: Categorys,
        as: "category",
      },
    });
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(400).end();
  }
};

const postGetLimit = async (req, res) => {
  try {
    const response = await Posts.findAll({
      offset: parseInt(req.query.offset),
      limit: 8,
      include: {
        model: Categorys,
        as: "category",
      },
    });
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(400).end();
  }
};

const postGetLimitByCategory = async (req, res) => {
  console;
  try {
    const response = await Posts.findAll({
      where: { idcategory: req.params.id },
      offset: parseInt(req.query.offset),
      limit: 8,
      include: {
        model: Categorys,
        as: "category",
      },
    });
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(400).end();
  }
};

const postCreate = async (req, res) => {
  console.log(req.body);

  const link = req.file.path.split("\\").slice(-3).join("\\");

  try {
    const response = await Posts.create({ ...req.body, img: link });
    res.status(200).json(response);
  } catch (err) {
    res.status(400).end();
  }
};

const postGetById = async (req, res) => {
  try {
    const response = await Posts.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (err) {
    res.status(400).end();
  }
};

const postDeleteById = async (req, res) => {
  try {
    const response = await Posts.findOne({
      where: {
        id: req.params.id,
      },
    });
    response.destroy();
    res.status(200).send("Delete success!");
  } catch (err) {
    res.status(400).end();
  }
};

const postUpdateById = async (req, res) => {
  try {
    const response = await Posts.findOne({
      where: {
        id: req.params.id,
      },
    });

    response.update({ ...response, ...req.body });
    response.save();

    res.status(200).json(response);
  } catch (err) {
    res.status(400).end();
  }
};

const postSearch = async (req, res) => {
  console.log( req.query.search)
  const key = req.query.search;
  try {
    const response = await Posts.findAll({
      where: {
        title: {
          [Op.like]: `%${key}%`,
        },
      },
      include: {
        model: Categorys,
        as: "category",
      },
      
    });
    res.status(200).json(response);
  } catch (e) {
    res.status(400).end();
  }
};

module.exports = {
  postGetAll,
  postCreate,
  postGetById,
  postDeleteById,
  postUpdateById,
  postGetLimit,
  postGetLimitByCategory,
  postSearch,
};

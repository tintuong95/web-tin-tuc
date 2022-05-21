const Categorys = require("./model.js");

const categoryGetAll = async (req, res) => {
  try {
    const response = await Categorys.findAll({});
    res.status(200).json(response);
  } catch (err) {
    res.status(400).end();
  }
};

const categoryCreate = async (req, res) => {
  try {
    const response = await Categorys.create(req.body);
    res.status(200).json(response);
  } catch (err) {
    res.status(400).end();
  }
};

const categoryGetById = async (req, res) => {
  try {
    const response = await Categorys.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (err) {
    res.status(400).end();
  }
};

const categoryUpdateById = async (req, res) => {
  try {
    const response = await Categorys.findOne({
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

const categoryRemoveById = async (req, res) => {
  try {
    const response = await Categorys.findOne({
      where: {
        id: req.params.id,
      },
    });

    response.destroy();
    res.status(200).send("Delete succes!");
  } catch (err) {
    res.status(400).end();
  }
};
module.exports = {
  categoryGetAll,
  categoryCreate,
  categoryGetById,
  categoryUpdateById,
  categoryRemoveById,
};

const User = require("./model.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userGetAll = async (req, res) => {
  try {
    const response = await User.findAll({});
    res.status(200).json(response);
  } catch (err) {
    res.status(400).end();
  }
};

const userGetById = async (req, res) => {
  try {
    const response = await User.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (response) {
      res.status(200).json(response);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    res.status(400).end();
  }
};

const userCreate = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const response = await User.create({ ...req.body, password: hash });
    res.status(200).json(response);
  } catch (err) {
    res.status(400).end();
  }
};

const userUpdateById = async (req, res) => {
  try {
    let response = await User.findOne({
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

const userRemoveById = async (req, res) => {
  try {
    const response = await User.findOne({
      where: {
        id: req.params.id,
      },
    });
    response.destroy();
    res.status(200).send("Delete Success!");
  } catch (err) {
    res.status(400).end();
  }
};

const signIn = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const response = await User.findOne({
      where: {
        username,
      },
    });

    const checkPassword = bcrypt.compareSync(password, response.password);

    if (response !== null && checkPassword) {
    
      const token=jwt.sign({ username }, "PRIVATE_KEY", {
        expiresIn: "1h",
      });
      res.status(200).json({ACCESS_TOKEN:token});
      return;
    }
    res.sendStatus(500);
  } catch (err) {
    res.sendStatus(500);
  }
};

module.exports = {
  userGetAll,
  userGetById,
  userCreate,
  userUpdateById,
  userRemoveById,
  signIn,
};

const sequelize = require("../../setup/models.js");
const Comments = require("./model.js");

const commentGetAll = async (req, res) => {
  try {
    const response = await Comments.findAll({});
    res.status(200).json(response);
  } catch (err) {
    res.status(400).end();
  }
};

const commentCreate = async (req, res) => {
  try {
    const response = await Comments.create(req.body);
    res.status(200).json(response);
  } catch (err) {
    res.status(400).end();
  }
};

const commentGetById = async (req, res) => {
  try {
    const response = await Comments.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (err) {
    res.status(400).end();
  }
};

const commentUpdateById = async (req, res) => {
  try {
    const response = await Comments.findOne({
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

const commentRemoveById = async (req, res) => {
  try {
    const response = await Comments.findOne({
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

const commentByIdPost=async (req,res)=>{
  try{
    const [results,metadata]=await sequelize.query("SELECT Comments.id,Comments.idpost,Comments.iduser FROM Comments INNER JOIN Posts ON Comments.idpost=Posts.id ")
    res.status(200).send(results,metadata)
  }catch(err){
    res.status(400).end();
  }
}


module.exports = {
  commentGetAll,
  commentCreate,
  commentGetById,
  commentUpdateById,
  commentRemoveById,
  commentByIdPost,
};

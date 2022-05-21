
const jwt = require("jsonwebtoken");

const authentication = async (req, res, next) => {
  const token = req.headers["authorization"].split(" ")[1];
  try {
    var decoded = jwt.verify(token, "PRIVATE_KEY");
    next();
    return ;
  } catch (err) {
    res.sendStatus(403);
  }
};

module.exports = {
  authentication,
};

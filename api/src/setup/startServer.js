const sequelize = require("./models.js");

const port = 4000;

const setupServer = (server) => {
  server.listen(port, async (err) => {
    err ? console.log(err) : console.log("Success!");
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  });
};

module.exports=setupServer
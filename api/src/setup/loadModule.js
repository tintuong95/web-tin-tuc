const express = require("express");
const cors = require("cors");
const path = require("path");

const multer = require("multer");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../public/image/uploads"));
  },
  filename: function (req, file, cb) {
    const uni = Date.now();
    const type = file.originalname.split(".")[1];
    cb(null, uni + "." + type);
  },
});

var upload = multer({ storage: storage });

const loadModules = (server) => {
  server.use(express.json());
  server.use(express.static(path.join(__dirname, "../../public")));
  server.use(cors());
};

module.exports = {
  loadModules,
  upload,
};

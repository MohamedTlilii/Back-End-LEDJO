const express = require("express");
const route = express.Router();
const verifiedToken = require("../../middlewares/verifyToken");
const upload = require("../../middlewares/multer");

// register
route.post("/register", require("./register"));
// login
route.post("/login", require("./login"));
// get products
route.get("/getProducts", require("./getProducts"));




module.exports = route;

const express = require("express");
const route = express.Router();
const verifiedToken = require("../../middlewares/verifyToken");
const upload = require("../../middlewares/multer");

// signup
route.post("/signup", require("./signup"));
// login
route.post("/login", require("./login"));
// get products
route.get("/getProducts", require("./getProducts"));
// get single product
route.get("/getSingleProduct/:id", require("./getSingleProduct"));




module.exports = route;

const express = require("express");
const route = express.Router();
const verifiedToken = require("../../middlewares/verifyToken");
const upload = require("../../middlewares/multer");

// register
// route.post("/register", require("./register"));

// login
route.post("/login", require("./login"));

// Get Products
route.get("/getProducts", require("./getProducts"));

// Add Product
route.post(
  "/addProduct",
  verifiedToken,
  upload.array("photo", 5),
  require("./addProduct")
);

// delete product
route.delete(
  "/deleteProduct/:productId",
  verifiedToken,
  require("./deleteProduct")
);

module.exports = route;

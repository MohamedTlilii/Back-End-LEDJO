// const port = 5000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

// Environmentals Varibales
const DBURI = process.env.DBURI;
const PORT = process.env.PORT || 5000;

// Function
mongoose
  .connect(DBURI)
  .then(() => {
    console.log("database connected ✅");
  })
  .catch((err) => {
    console.log(err);
    console.log("can't coonect to database ❌");
  });
// Middlewares
app.use(express.json());
app.use(cors());

// Api Routes
app.use("/api/user", require("./routes/user"));
// User Routes
app.use("/api/admin", require("./routes/admin"));
// Admin Routes

// Image Storage Engine
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// API Creation
app.get("/", (req, res) => {
  res.send("Express App is Running");
});

// Listen to Requests
app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server Runing on Port :${PORT}`);
});

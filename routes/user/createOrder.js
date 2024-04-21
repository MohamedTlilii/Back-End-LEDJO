// routes/sendOrder.js
const Order = require("../../models/Order");
const Cart = require("../../models/Cart");
// const cloudinary = require("../../middlewares/cloudinary");
// const fs = require("fs");

module.exports = async (req, res) => {
  try {
    let { id } = req.auth;
    let { total } = req.body;
    let cart = await Cart.find({ userId: id });
    let newOrder = await new Order({
      total,
      userId: id,
      cart,
    });
    await newOrder.save();
    await Cart.deleteMany({ userId: id });

    res.status(200).json({ status: true, message: "Order added successfully" });
  } catch (error) {
    res.status(401).json({ status: false, error });
  }
};

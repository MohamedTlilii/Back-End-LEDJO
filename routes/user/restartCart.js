const Cart = require("../../models/Cart");

module.exports = async (req, res) => {
  try {
    let { id } = req.auth;
    await Cart.deleteMany({ userId: id });
    res.status(200).json({ status: true, data: "Cart removed successfully" });
  } catch (error) {
    if (error) {
      console.log(error);
    }
    res.status(401).json({ status: false, error });
  }
};

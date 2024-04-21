const Cart = require("../../models/Cart");
module.exports = async (req, res) => {
  try {
    let { id } = req.auth;
    let ownCart = await Cart.find({ userId: id }).populate("productId");
    res.status(200).json({ status: true, data: ownCart });
  } catch (error) {
    if (error) {
      console.log(error);
    }
    res.status(401).json({ status: false, error });
  }
};

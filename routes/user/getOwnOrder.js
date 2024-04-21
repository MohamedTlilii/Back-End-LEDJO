const Order = require("../../models/Order");
module.exports = async (req, res) => {
  try {
    let { id } = req.auth;
    let ownOrder = await Order.find({ userId: id }).populate("cart.productId");
    res.status(200).json({ status: true, data: ownOrder });
  } catch (error) {
    if (error) {
      console.log(error);
    }
    res.status(401).json({ status: false, error });
  }
};

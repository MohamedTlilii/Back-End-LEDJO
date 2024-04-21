const Cart = require("../../models/Cart");

module.exports = async (req, res) => {
  try {
    let { productId } = req.params;
    let product = await Cart.findOne({ productId });
    if (product.quantity > 1) {
      const updatedCart = await Cart.findOneAndUpdate(
        { productId },
        {
          $set: { quantity: product.quantity - 1 },
        },
        { new: true }
      );

      res.status(200).json({
        status: true,
        data: updatedCart,
      });
    } else {
      res.status(400).json({
        status: false,
        data: "negative or null values are not available",
      });
    }
  } catch (error) {
    if (error) {
      console.log(error);
    }
    res.status(401).json({ status: false, error });
  }
};

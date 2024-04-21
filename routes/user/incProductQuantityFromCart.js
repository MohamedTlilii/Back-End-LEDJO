const Cart = require("../../models/Cart");

module.exports = async (req, res) => {
  try {
    let { productId } = req.params;
    const updatedCart = await Cart.findOneAndUpdate(
      { productId },
      {
        $inc: { quantity: 1 },
      },
      { new: true }
    );

    res.status(200).json({
      status: true,
      data: updatedCart,
    });
  } catch (error) {
    if (error) {
      console.log(error);
    }
    res.status(401).json({ status: false, error });
  }
};

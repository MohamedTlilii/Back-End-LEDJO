const Cart = require("../../models/Cart");

module.exports = async (req, res) => {
  try {
    let { id } = req.auth;
    let { productId } = req.params;
    const editedCart = await Cart.findOne({ productId });
    if (editedCart.quantity > 1) {
      let newCart = await Cart.findByIdAndUpdate(
        editedCart._id,
        {
          $set: {
            quantity: editedCart.quantity - 1,
          },
        },
        { new: true }
      );
      return res
        .status(200)
        .json({ status: true, data: "Cart wqas updated successfully" });
    }
    await Cart.findByIdAndDelete(editedCart._id);
    res
      .status(200)
      .json({
        status: true,
        data: "Product was removed from the cart successfully",
      });
  } catch (error) {
    if (error) {
      console.log(error);
    }
    res.status(401).json({ status: false, error });
  }
};

const Cart = require("../../models/Cart");

module.exports = async (req, res) => {
  try {
    let { quantity } = req.body;

    let { id } = req.auth;
    let { productId } = req.params;
    const existedProduct = await Cart.findOne({ userId: id, productId });
    if (existedProduct) {
      let newCart = await Cart.findByIdAndUpdate(
        existedProduct._id,
        {
          $inc: { quantity: 1 },
        },
        { new: true }
      );
      return res
        .status(200)
        .json({ status: true, data: "Cart was updated successfully" });
    }
    const newCart = await new Cart({
      quantity,
      userId: id,
      productId,
    });
    await newCart.save();
    res
      .status(200)
      .json({ status: true, data: "Product added To Cart successfully" });
  } catch (error) {
    if (error) {
      console.log(error);
    }
    res.status(401).json({ status: false, error });
  }
};

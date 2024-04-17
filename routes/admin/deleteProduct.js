const Product = require("../../models/Product");
module.exports = async (req, res) => {
  try {
    let { productId } = req.params;
    await Product.findByIdAndDelete(productId);
    res
      .status(200)
      .json({ status: true, message: "Product Deleted Successfully" });
  } catch (error) {
    if (error) {
      console.log(error);
    }
    res.status(401).json({ status: false, error });
  }
};

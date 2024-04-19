const Product = require("../../models/Product");

module.exports = async (req, res) => {
  try {
    const { id } = req.params; 
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ status: false, error: "Product not found" });
    }

    res.status(200).json({ status: true, data: product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, error: "Internal Server Error" });
  }
};

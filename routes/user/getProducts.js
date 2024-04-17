const Product = require("../../models/Product");
module.exports = async (req, res) => {
  try {
    let products = await Product.find();
    res.status(200).json({ status: true, data: products });
  } catch (error) {
    if (error) {
      console.log(error);
    }
    res.status(401).json({ status: false, error });
  }
};

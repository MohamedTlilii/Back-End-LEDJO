const Product = require("../../models/Product");
module.exports = async (req, res) => {
  try {
    // let { id } = req.auth;
    // after log register using veirfy token using her too 
    let products = await Product.find();
    res.status(200).json({ status: true, data: products });
  } catch (error) {
    if (error) {
      console.log(error);
    }
    res.status(401).json({ status: false, error });
  }
};

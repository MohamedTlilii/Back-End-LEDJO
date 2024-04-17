// Backend addProduct Controller
const Product = require("../../models/Product");
const cloudinary = require("../../middlewares/cloudinary");
const fs = require("fs");

module.exports = async (req, res) => {
  try {
    const { name, desc, category, classe, collections, new_price, old_price, avilable } =
      req.body;
    
    // Function to upload images to Cloudinary
    const uploader = async (path) =>
      await cloudinary.uploads(path, "ledov/products");

    let urls = [];
    for (let i = 0; i < req.files.length; i++) {
      let result = await uploader(req.files[i].path);
      urls.push(result.url);
      fs.unlinkSync(req.files[i].path);
    }

    // Create a new product instance
    let newProduct = await new Product({
      name,
      desc,
      category,
      classe,
      collections,
      new_price,
      old_price,
      avilable,
      imageUrls: urls,
    });

    // Save the new product to the database
    await newProduct.save();

    res.status(201).json({ status: true, message: "Product Added Successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, error: error });
  }
};

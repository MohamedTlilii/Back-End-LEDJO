const User = require("../../models/User");
const cloudinary = require("../../middlewares/cloudinary");
const fs = require("fs");

module.exports = async (req, res) => {
  try {
    let { id } = req.auth;
    
    const uploader = async (path) =>
      await cloudinary.uploads(path, "ledov/userpic");
    let { path } = req.file;

    if (!path) {
      return res.status(400).json({ error: "No file uploaded." });
    }

    const { url } = await uploader(path);
    fs.unlinkSync(path);
    await User.findByIdAndUpdate(id, {
      $set: {
        imageUrl: url,
      },
    });
    res
      .status(200)
      .json({ status: true, message: "User photo was updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error." });
  }
};

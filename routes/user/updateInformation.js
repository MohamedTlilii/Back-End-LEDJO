const User = require("../../models/User");
module.exports = async (req, res) => {
  try {
    let { id } = req.auth;
    await User.findByIdAndUpdate(id, {
      $set: {
        ...req.body,
      },
    });
    res
      .status(200)
      .json({ status: true, message: "User Information was updated successfully" });
  } catch (error) {
    if (error) {
      console.log(error);
    }
    res.status(401).json({ status: false, error });
  }
};
const User = require("../../models/User");
module.exports = async (req, res) => {
  try {
    let { id } = req.auth;
    let user = await User.findById(id);
    res.status(200).json({ status: true, data: user });
  } catch (error) {
    if (error) {
      console.log(error);
    }
    res.status(401).json({ status: false, error });
  }
};

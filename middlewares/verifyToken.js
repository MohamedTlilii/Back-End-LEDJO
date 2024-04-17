const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async (req, res, next) => {
  let SECRET_KEY = process.env.SECRET_KEY;
  let { token } = req.headers;
  if (!token) {
    return res.status(400).json({ status: false, error: "Invalid token" });
  }
  // Verify the JWT token and handle expiration
  let verifiedToken = await jwt.verify(token, SECRET_KEY);
  if (!verifiedToken) {
    return res.status(400).json({ status: false, error: "Expired session" });
  } else {
    // Set authenticated user ID in the request object
    req.auth = { id: verifiedToken.id };
    return next();
  }
};

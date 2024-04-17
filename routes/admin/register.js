const Admin = require("../../models/Admin");
const bcrypt = require("bcrypt");

module.exports = async (req, res) => {
  try {
    const { firstName, lastName, address, number, password, email } = req.body;

    // Check if email already exists
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(401).json({
        status: true,
        message: "This email is already in use. Please try another one.",
      });
    }

    // Validate password
    if (!password) {
      return res.status(401).json({
        status: false,
        error: "Password is required.",
      });
    }
    const validatePassword = password.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.*@-_).{8,}$/);
    if (!validatePassword) {
      return res.status(401).json({
        status: false,
        error: "Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one digit, and one special character.",
      });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create and save the new admin
    const newAdmin = await new Admin({
      firstName,
      lastName,
      address,
      number,
      email,
      password: hashedPassword,
    });
    await newAdmin.save();

    res.status(200).json({ status: true, message: "Admin created successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, error: "Server error." });
  }
};

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, " Please enter your firstName 🥴"],
    },
    lastName: {
      type: String,
      required: [true, "Please enter your lastName 🥴 "],
    },
    address: {
      type: String,
      required: [true, "Please enter your address 📢 "],
    },
    // city: {
    //   type: String,
    //   required: [true, "Please enter your city 🏙️"],
    // },
    number: {
      type: String,
      required: [true, "Please enter your number 📱 "],
    },

    // adminName: {
    //   type: String,
    //   required: [true, "Please enter your Username 🥴 "],
    // },
    password: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Please enter your Email ✉️"],
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "This is invalid email",
      ],
    },
    imageUrl: {
      type: String,
      default:
        "https://c8.alamy.com/comp/2PY6T5Y/inspiration-showing-sign-admin-word-for-officials-in-executive-branch-of-government-people-responsible-2PY6T5Y.jpg",
    },
    isAdmin: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Admin = mongoose.model("admins", adminSchema);

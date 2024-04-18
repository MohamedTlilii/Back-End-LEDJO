const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    // firstName: {
    //   type: String,
    //   required: [true, " Please enter your firstName 🥴"],
    // },
    // lastName: {
    //   type: String,
    //   required: [true, "Please enter your lastName 🥴 "],
    // },
    // address: {
    //   type: String,
    //   required: [true, "Please enter your address 📢 "],
    // },
    // city: {
    //   type: String,
    //   required: [true, "Please enter your city 🏙️"],
    // },
    // number: {
    //   type: String,
    //   required: [true, "Please enter your number 📱 "],
    // },

    userName: {
      type: String,
      required: [true, "Please enter your Username 🥴 "],
    },
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
        "https://static.vecteezy.com/ti/vecteur-libre/p3/12911441-icone-de-profil-d-avatar-par-defaut-dans-le-style-de-ligne-vectoriel.jpg",
    },
    isUser: {
      type: Boolean,
      default: true,
    },
    isBanned: {
      type: Boolean,
      default: false,
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = User = mongoose.model("users", userSchema);

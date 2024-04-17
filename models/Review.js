const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "products",
    },

    yourReview: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Review = mongoose.model("reviews", reviewSchema);

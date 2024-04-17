const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name is required field"],
    },

    desc: {
      type: String,
      required: [true, "Description  is required field"],
    },
    category: {
      type: String,
      required: [true, "category is required field"],
    },
    classe: {
      type: String,
      required: [true, "classe is required field"],
    },
    collections: {
      type: String,
      required: [true, "collections is required field"],
    },

    imageUrls: {
      type: [String],
    },
    new_price: {
      type: Number,
      required: [true, "new_price is required field"],
    },
    old_price: {
      type: Number,
      required: [true, "old_price is required field"],
    },
    avilable: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Product = mongoose.model("products", productSchema);

// models/Order.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    total: {
      type: Number,
    },
    cart: {
      type: [
        {
          createdAt: String,
          productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "products",
          },
          quantity: Number,
          updatedAt: String,
          userId: mongoose.Schema.Types.ObjectId,
        },
      ],
    },
    isConfirmed: {
      type: Boolean,
      default: false,
    },
    isDelevered: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Order = mongoose.model("orders", orderSchema);

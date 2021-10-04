const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: { type: String, unique: true, required },
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    amount: {
      type: String,
      required,
    },
    adress: {
      type: Object,
      required,
    },
    status: {
      type: String,
      default: "pending",
    },
  },
  { timestamps: true }
);

const OrderModel = mongoose.model("User", orderSchema);
module.exports = OrderModel;

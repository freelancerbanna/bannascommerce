const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required },
    description: { type: String, required },
    image: { type: String, required },
    categories: { type: Array, required },
    size: { type: String },
    color: { type: String },
    price: { type: Number, required },
  },
  { timestamps: true }
);

const ProductModel = mongoose.model("User", productSchema);
module.exports = ProductModel;

const CartModel = require("../models/CartModel");

//post product action
const postCart = async (req, res) => {
  try {
    const savedCart = await new CartModel(req.body);
    savedCart.save();
    res.status(200).send(savedCart);
  } catch (err) {
    res.status(500).send(err);
  }
};

const updateCart = async (req, res) => {
  try {
    const updatedCart = await CartModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).send(updatedCart);
  } catch (err) {
    res.status(500).send(err);
  }
};

//cart delete action
const deleteCart = async (req, res) => {
  try {
    await CartModel.findByIdAndDelete(req.params.id);
    res.status(500).send("Product has been deleted");
  } catch (err) {
    res.status(500).send(err);
  }
};

//user cart get aciton
const getCarts = async (req, res) => {
  try {
    const cart = await CartModel.findOne({ userId: req.params.userId });

    res.status(200).send(cart);
  } catch (err) {
    res.status(500).send(err);
  }
};

//get all products action
const getAllCart = async (req, res) => {
  try {
    const cart = await CartModel.find();
    res.status(200).send(cart);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = { postCart, deleteCart, getAllCart, updateCart, getCarts };

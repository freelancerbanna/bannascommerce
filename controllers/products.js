const ProductModel = require("../models/ProductMoel");

//post product action
const postProducts = async (req, res) => {
  try {
    const savedProduct = await new ProductModel(req.body);
    savedProduct.save();
    res.status(200).send(savedProduct);
  } catch (err) {
    res.status(500).send(err);
  }
};

//product update action
const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await UserModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).send(updatedProduct);
  } catch (err) {
    res.status(500).send(err);
  }
};

//product delete action
const deleteProduct = async (req, res) => {
  try {
    await ProductModel.findByIdAndDelete(req.params.id);
    res.status(500).send("Product has been deleted");
  } catch (err) {
    res.status(500).send(err);
  }
};

//product get aciton
const getProducts = async (req, res) => {
  try {
    const product = await ProductModel.findById(req.params.id);

    res.status(200).send(product);
  } catch (err) {
    res.status(500).send(err);
  }
};

//get all products action
const getAllProducts = async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let products;

    if (qNew) {
      products = await ProductModel.find().sort({ createdAt: -1 }).limit(8);
    } else if (qCategory) {
      products = await ProductModel.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      products = await ProductModel.find();
    }

    res.status(200).send(products);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = { postProducts, updateProduct, deleteProduct, getAllProducts };

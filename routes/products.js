const express = require("express");
const {
  postProducts,
  updateProduct,
  deleteProduct,
  getAllProducts,
} = require("../controllers/products");
const { verifyTokenAndAdmin } = require("./verifyToken");
const router = express.Router();

router.post("/products/post", verifyTokenAndAdmin, postProducts);
router.put("/products/:id", verifyTokenAndAdmin, updateProduct);
router.delete("/products/:id", verifyTokenAndAdmin, deleteProduct);
router.get("/products", getAllProducts);

module.exports = router;

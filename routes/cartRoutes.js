const express = require("express");
const {
  postCart,
  deleteCart,
  getAllCart,
  updateCart,
  getCarts,
} = require("../controllers/cartController");
const {
  verifyTokenAndAdmin,
  verifyToken,
  verifyTokenAuthorization,
} = require("./verifyToken");
const router = express.Router();

router.post("/carts/post", verifyToken, postCart);
router.put("/carts/:id", verifyTokenAuthorization, updateCart);
router.delete("/carts/:id", verifyTokenAuthorization, deleteCart);
router.get("/carts/:userId", getCarts);
router.get("/carts", verifyTokenAndAdmin, getAllCart);

module.exports = router;

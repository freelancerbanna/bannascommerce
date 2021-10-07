const express = require("express");
const {
  postOrder,
  updateOrder,
  deleteOrder,
  getOrders,
  getAllOrder,
  orderIncome,
} = require("../controllers/orderController");
const {
  verifyTokenAndAdmin,
  verifyToken,
  verifyTokenAuthorization,
} = require("./verifyToken");
const router = express.Router();

router.post("/orders/post", verifyTokenAndAdmin, postOrder);
router.put("/orders/:id", verifyTokenAndAdmin, updateOrder);
router.delete("/orders/:id", verifyTokenAndAdmin, deleteOrder);
router.get("/orders/:userId", getOrders);
router.get("/orders", verifyTokenAndAdmin, getAllOrder);
router.get("/orders/stats", orderIncome);
module.exports = router;

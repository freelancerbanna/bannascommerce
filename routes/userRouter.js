const express = require("express");
const {
  updateUser,
  deleteUser,
  getUser,
  getAllUser,
  getUserStats,
} = require("../controllers/userRouter");
const {
  verifyTokenAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const router = express.Router();

router.put("/users/:id", verifyTokenAuthorization, updateUser);
router.delete("/users/:id", verifyTokenAuthorization, deleteUser);
router.get("/users/find/:id", verifyTokenAndAdmin, getUser);
router.get("/users", verifyTokenAndAdmin, getAllUser);
router.get("/users/stats", verifyTokenAndAdmin, getUserStats);
module.exports = router;

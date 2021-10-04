const express = require("express");
const { userRouter } = require("../controllers/userRouter");
const router = express.Router();

router.post("/users", userRouter);
module.exports = router;

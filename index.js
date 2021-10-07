const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

//applying middleware
app.use(express.json());
app.use(cors());

//mongodb connection
mongoose
  .connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected"))
  .catch((err) => console.log("err:", err));

//routes and requring controllers
const userRoute = require("./routes/userRouter");
const authUser = require("./routes/authUser");
const products = require("./routes/products");
const carts = require("./routes/cartRoutes");
const orders = require("./routes/orderRoutes");

app.use("/api", userRoute);
app.use("/api", authUser);
app.use("/api", products);
app.use("/api", carts);
app.use("/api", orders);

//port listening
app.listen(process.env.PORT || 5000, () => {
  console.log("server running");
});

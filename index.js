const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

//mongodb connection
mongoose
  .connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected"))
  .catch((err) => console.log("err:", err));

//applying middleware
app.use(express.json());

//routes and requring controllers
const userRoute = require("./routes/userRouter");
const authUser = require("./routes/authUser");

app.use("/api", userRoute);
app.use("/api", authUser);

//port listening
app.listen(process.env.PORT || 5000, () => {
  console.log("server running");
});

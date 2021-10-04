const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true, required },
    fname: { type: String, required },
    lname: { type: String, required },
    email: { type: String, unique: true, required },
    password: { type: String, required },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;

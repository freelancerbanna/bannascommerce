const UserModel = require("../models/UserModel");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
//user registration action
const registerUser = async (req, res) => {
  const user = {
    username: req.body.username,
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_PASS
    ).toString(),
  };
  try {
    const newUser = new UserModel(user);
    const saves = await newUser.save();
    if (saves) {
      res.status(200).send(user);
    } else {
      res.status(400).send("Registration Failed");
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

//user login actions
const loginUser = async (req, res) => {
  try {
    const user = await UserModel.findOne({
      email: req.body.email,
    });

    !user && res.status(401).send("no user found");

    const passwordHashed = CryptoJS.AES.decrypt(
      user.password,
      process.env.SECRET_PASS
    );
    const pass = passwordHashed.toString(CryptoJS.enc.Utf8);
    pass !== req.body.password && res.status(401).send("password incorrect");

    const { password, ...others } = user._doc;

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT,
      { expiresIn: "3d" }
    );

    res.status(200).send({ ...others, accessToken });
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = { registerUser, loginUser };

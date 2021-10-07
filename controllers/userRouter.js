const UserModel = require("../models/UserModel");

//user update action
const updateUser = async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_PASS
    ).toString();
  }
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).send(updatedUser);
  } catch (err) {
    res.status(500).send(err);
  }
};

//user delete action
const deleteUser = async (req, res) => {
  try {
    await UserModel.findByIdAndDelete(req.params.id);
    res.status(500).send("User has been deleted");
  } catch (err) {
    res.status(500).send(err);
  }
};

//user get aciton
const getUser = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).send(others);
  } catch (err) {
    res.status(500).send(err);
  }
};

//get all user action
const getAllUser = async (req, res) => {
  const query = req.query.new;
  try {
    const users = query
      ? await UserModel.find().sort({ _id: -1 }).limit(8)
      : await UserModel.find();
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err);
  }
};

//get user stats
const getUserStats = async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  try {
    const data = await UserModel.aggregate([
      {
        $match: { createdAt: { $gte: lastYear } },
      },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = { updateUser, deleteUser, getUser, getAllUser, getUserStats };

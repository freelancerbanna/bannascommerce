const OrderModel = require("../models/OrderModel");

//post product action
const postOrder = async (req, res) => {
  try {
    const savedOrder = await new OrderModel(req.body);
    savedOrder.save();
    res.status(200).send(savedOrder);
  } catch (err) {
    res.status(500).send(err);
  }
};

//update order
const updateOrder = async (req, res) => {
  try {
    const updatedOrder = await OrderModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).send(updatedOrder);
  } catch (err) {
    res.status(500).send(err);
  }
};

//order delete action
const deleteOrder = async (req, res) => {
  try {
    await OrderModel.findByIdAndDelete(req.params.id);
    res.status(500).send("Product has been deleted");
  } catch (err) {
    res.status(500).send(err);
  }
};

//user cart get aciton
const getOrders = async (req, res) => {
  try {
    const order = await OrderModel.find({ userId: req.params.userId });

    res.status(200).send(order);
  } catch (err) {
    res.status(500).send(err);
  }
};

//get all carts action
const getAllOrder = async (req, res) => {
  try {
    const order = await OrderModel.find();
    res.status(200).send(order);
  } catch (err) {
    res.status(500).send(err);
  }
};

//get monthly income actions
const orderIncome = async (req, res) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const prevMonth = new Date(new Date().setMonth(lastMonth.setMonth() - 1));
  try {
    const income = await new OrderModel.aggregate([
      { $match: { createdAt: { $gte: { prevMonth } } } },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    res.status(200).send(income);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  postOrder,
  deleteOrder,
  getAllOrder,
  updateOrder,
  getOrders,
  orderIncome,
};

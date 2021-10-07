const express = require("express");
const router = express().Router();
const stripe = require("stripe");
router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeSucc) => {
      if (stripeErr) {
        res.status(500).send(stripeErr);
      } else {
        res.status(200).send(stripeSucc);
      }
    }
  );
});
module.exports = router;

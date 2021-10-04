const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    jwt.verify(token, process.env.JWT, (err, user) => {
      err && res.status(400).send("token not valid");
      req.user = user;
      next();
    });
  } else {
    res.status(401).send("you are not authenticated");
  }
};
module.exports = { verifyToken };

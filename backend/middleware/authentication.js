const jwt = require("jsonwebtoken");
const UserRoles = require("../models/userRole.model");

require("dotenv").config();

exports.checkAdmin = (req, res, next) => {
  let temp = req.headers.authorization.split("Bearer ");
  const token = temp[temp.length - 1];
  let decoded = jwt.verify(token, process.env.SECRET);

  let userId = decoded.userId;

  UserRoles.findOne({
    user: userId
  }).then(userRole => {
    let roles = userRole.roles;
    
    if (roles.indexOf("admin") >= 0) {
      next();
    }
    else {
      res.status(400).json({
        msg: "Invalid token"
      })
    }
  }).catch(err => {
    res.status(400).json({
      err,
      msg: "Invalid token"
    })
  })
}
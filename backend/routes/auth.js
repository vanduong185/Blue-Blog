const router = require("express").Router();
const jwt = require("jsonwebtoken");

require("dotenv").config();

let Account = require("../models/account.model");
let User = require("../models/user.model");
let UserRole = require("../models/userRole.model");

router.route("/login").post((req, res) => {
  const { email, password } = req.body;

  Account.findOne({
    email, password
  }).then(account => {
    User.findOne({
      account: account._id
    }).then(user => {
      console.log(user);
      
      let token = jwt.sign(
        { userId: user._id, username: user.name },
        process.env.SECRET,
        { expiresIn: "10h"}
      );

      res.json({
        sucess: true,
        user,
        token,
      });
    }) 
  })
  .catch(err => res.status(400).json("Error"));
});

module.exports = router;

const router = require("express").Router();
let Account = require("../../models/account.model");

router.route("/").get((req, res) => {
  Account.find()
    .then(accounts => res.json(accounts))
    .catch(err => res.status(400).json("Error: " + err));  
});

router.route("/add").post((req, res) => {
  const { email, password } = req.body;
  const newAccount = new Account({email, password});

  newAccount.save()
    .then(() => res.json('Account added!'))
    .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;

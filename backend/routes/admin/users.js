const router = require("express").Router();
let User = require("../../models/user.model");
let UserRole = require("../../models/userRole.model");

router.route("/").get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err));
})

router.route("/add").post((req, res) => {
  const { account, name, avatarURL } = req.body;
  const newUser = new User({account, name, avatarURL});

  newUser.save()
    .then(() => res.json('User added'))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

// router.route('/:id').delete((req, res) => {
//   user.findByIdAndDelete(req.params.id)
//     .then(() => res.json('user deleted.'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/update/:id').post((req, res) => {
//   user.findById(req.params.id)
//     .then(user => {
//       user.name = req.body.name;

//       user.save()
//         .then(() => res.json('user updated!'))
//         .catch(err => res.status(400).json('Error: ' + err));
//     })
//     .catch(err => res.status(400).json('Error: ' + err));
// });

module.exports = router;

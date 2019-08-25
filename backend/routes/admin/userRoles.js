const router = require("express").Router();
let UserRole = require("../../models/userRole.model");

router.route("/").get((req, res) => {
  UserRole.find()
    .then(userRoles => res.json(userRoles))
    .catch(err => res.status(400).json("Error: " + err));
})

router.route("/add").post((req, res) => {
  const { user, roles } = req.body;
  const newUserRole = new UserRole({user, roles});

  newUserRole.save()
    .then(() => res.json('UserRole added'))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').get((req, res) => {
  UserRole.findById(req.params.id)
    .then(userRole => res.json(userRole))
    .catch(err => res.status(400).json('Error: ' + err));
});

// router.route('/:id').delete((req, res) => {
//   user.findByIdAndDelete(req.params.id)
//     .then(() => res.json('user deleted.'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

router.route('/update/:id').post((req, res) => {
  UserRole.findById(req.params.id)
    .then(userRole => {
      userRole.roles = req.body.roles;

      userRole.save()
        .then(() => res.json('UserRole updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

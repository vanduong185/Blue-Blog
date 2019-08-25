const router = require("express").Router();
let Blog = require("../../models/blog.model");

router.route("/").get((req, res) => {
  Blog.find().populate("category").exec()
    .then(blogs => res.json(blogs))
    .catch(err => res.status(400).json("Error: " + err));
})

router.route("/add").post((req, res) => {
  const data = { category, header, content, shortDesc, likes, comments } = req.body;
  const newBlog = new Blog(data);

  newBlog.save()
    .then(() => res.json('Blog added'))
    .catch(err => res.status(400).json('Error: ' + err))
})

// router.route('/:id').get((req, res) => {
//   User.findById(req.params.id)
//     .then(user => res.json(user))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

module.exports = router;

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema({
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true 
  },
  header: {
    type: String
  },
  content: {
    type: String
  },
  shortDesc: {
    type: String
  },
  likes: [
    {
      likedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
    }
  ],
  comments: [
    {
      text: String,
      postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
    }
  ]
}, {
  timestamps: true
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;

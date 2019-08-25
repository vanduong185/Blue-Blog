const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  account: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Account",
    required: true 
  },
  name: {
    type: String,
    required: true,
    minlength: 1,
  },
  avatarURL: {
    type: String
  },
}, {
  timestamps: true
});

const User = mongoose.model("User", userSchema);

module.exports = User;

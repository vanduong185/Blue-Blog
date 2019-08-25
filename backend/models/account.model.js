const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const accountSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
  },
  password: {
    type: String,
    required: true,
    minlength: 3,
  }
}, {
  timestamps: true
});

const Account = mongoose.model("Account", accountSchema);

module.exports = Account;

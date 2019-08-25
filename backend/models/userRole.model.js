const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userRoleSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Account",
    required: true
  },
  roles: {
    type: Array,
    default: ["client"]
  }
}, {
  timestamps: true
});

const UserRole = mongoose.model("UserRole", userRoleSchema);

module.exports = UserRole;

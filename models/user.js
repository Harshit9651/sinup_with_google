// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  auth0Id: {
    type: String,
    required: true,
    unique: true
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;

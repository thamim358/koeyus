// Assuming you have a file models/User.js for defining the User schema

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // Other user properties if needed
});

const User = mongoose.model('User', userSchema);

module.exports = User;

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const signupSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Signup = mongoose.model('Signup', signupSchema);

module.exports = Signup;
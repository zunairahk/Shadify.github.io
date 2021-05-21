const express = require('express');
const Signup = require('../models/Signup');

const route = express.Router();

route.get('/', (req, res) => {
    Signup.find()
    .then(signups => res.json(signups))
    .catch(err => res.status(400).json('Error: ' + err));
});

route.post('/', async (req, res) => {
  const { userName, email, password } = req.body;
  let signup = {};

  signup.userName = userName;
  signup.email = email;
  signup.password = password;

  let signupModel = new Signup(signup);
  await signupModel.save();
  res.json("Document added");
});

module.exports = route;
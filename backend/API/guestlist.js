const express = require('express');
const GuestList = require('../models/GuestList');

const route = express.Router();

route.get('/', (req, res) => {
    GuestList.find()
    .then(guestlists => res.json(guestlists))
    .catch(err => res.status(400).json('Error: ' + err));
});

route.post('/', async (req, res) => {
  const { name, number, address, invited } = req.body;
  let guestlist = {};

  guestlist.name = name;
  guestlist.number = number;
  guestlist.address = address;
  guestlist.invited = invited;

  let guestlistModel = new GuestList(guestlist);
  await guestlistModel.save();
  res.json("Document added");
});

module.exports = route;
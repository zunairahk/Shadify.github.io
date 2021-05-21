const express = require('express');
const Venue = require('../models/Venue');

const route = express.Router();

route.get('/', (req, res) => {
  Venue.find()
    .then(venues => res.json(venues))
    .catch(err => res.status(400).json('Error: ' + err));
});

route.post('/', async (req, res) => {
  const { name, number, address, noOfPeople, minPrice } = req.body;
  let venue = {};

  venue.name = name;
  venue.number = number;
  venue.address = address;
  venue.noOfPeople = noOfPeople;
  venue.minPrice = minPrice;

  let venueModel = new Venue(venue);
  await venueModel.save();
  res.json("Document added");
});

module.exports = route;
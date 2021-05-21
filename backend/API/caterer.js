const express = require('express');
const Caterer = require('../models/Caterer');

const route = express.Router();

route.get('/', (req, res) => {
  Caterer.find()
    .then(caterers => res.json(caterers))
    .catch(err => res.status(400).json('Error: ' + err));
});

route.post('/', async (req, res) => {
  const { name, number, address, foodType, minPrice } = req.body;
  let caterer = {};

  caterer.name = name;
  caterer.number = number;
  caterer.address = address;
  caterer.foodType = foodType;
  caterer.minPrice = minPrice;

  let catererModel = new Caterer(caterer);
  await catererModel.save();
  res.json("Document added");
});

module.exports = route;
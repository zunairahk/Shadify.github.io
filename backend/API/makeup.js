const express = require('express');
const Makeup = require('../models/Makeup');

const route = express.Router();

route.get('/', (req, res) => {
  Makeup.find()
    .then(makeups => res.json(makeups))
    .catch(err => res.status(400).json('Error: ' + err));
});

route.post('/', async (req, res) => {
  const { name, number, address, minPrice } = req.body;
  let makeup = {};

  makeup.name = name;
  makeup.number = number;
  makeup.address = address;
  makeup.minPrice = minPrice;

  let makeupModel = new Makeup(makeup);
  await makeupModel.save();
  res.json("Document added");
});

module.exports = route;
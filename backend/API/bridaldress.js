const express = require('express');
const BridalDress = require('../models/BridalDress');

const route = express.Router();

route.get('/', (req, res) => {
  BridalDress.find()
    .then(bridaldresses => res.json(bridaldresses))
    .catch(err => res.status(400).json('Error: ' + err));
});

route.post('/', async (req, res) => {
  const { name, number, address, minPrice } = req.body;
  let bridalDress = {};

  bridalDress.name = name;
  bridalDress.number = number;
  bridalDress.address = address;
  bridalDress.minPrice = minPrice;

  let bridalDressModel = new BridalDress(bridalDress);
  await bridalDressModel.save();
  res.json("Document added");
});

module.exports = route;
const express = require('express');
const Photographer = require('../models/Photographer');

const route = express.Router();

route.get('/', (req, res) => {
  Photographer.find()
    .then(photographers => res.json(photographers))
    .catch(err => res.status(400).json('Error: ' + err));
});

route.post('/', async (req, res) => {
  const { name, number, address, minPrice } = req.body;
  let photographer = {};

  photographer.name = name;
  photographer.number = number;
  photographer.address = address;
  photographer.minPrice = minPrice;

  let photographerModel = new Photographer(photographer);
  await photographerModel.save();
  res.json("Document added");
});

module.exports = route;
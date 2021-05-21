const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const catererSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  number: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
  foodType: {
    type: String,
    required: true,
  },
  minPrice: {
    type: String,
    required: true,
  },
});

const Caterer = mongoose.model('Caterer', catererSchema);

module.exports = Caterer;
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bridalDressSchema = new Schema({
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
  minPrice: {
    type: String,
    required: true,
  },
});

const BridalDress = mongoose.model('BridalDress', bridalDressSchema);

module.exports = BridalDress;
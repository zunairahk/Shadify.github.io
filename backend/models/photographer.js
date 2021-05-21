const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const photographerSchema = new Schema({
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

const Photographer = mongoose.model('Photographer', photographerSchema);

module.exports = Photographer;
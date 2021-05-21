const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const makeupSchema = new Schema({
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

const Makeup = mongoose.model('Makeup', makeupSchema);

module.exports = Makeup;
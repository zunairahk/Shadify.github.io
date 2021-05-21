const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const venueSchema = new Schema({
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
  noOfPeople: {
    type: Number,
    required: true,
  },
  minPrice: {
    type: String,
    required: true,
  },
});

const Venue = mongoose.model('Venue', venueSchema);

module.exports = Venue;
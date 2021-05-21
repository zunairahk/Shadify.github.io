const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const guestlistSchema = new Schema({
  name: {
    type: String,
    required: true,
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
  invited: {
      type: Boolean,
  }
});

const GuestList = mongoose.model('GuestList', guestlistSchema);

module.exports = GuestList;
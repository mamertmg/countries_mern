const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CountrySchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  name: {
    type: String,
  },
  capital: {
    type: String,
  },
  region: {
    type: String,
  },
  population: {
    type: Number,
  },
  flag: {
    type: String,
  },
  map:{
    type: String,
  }
});

const Country = mongoose.model('Country', CountrySchema);

module.exports = { Country };
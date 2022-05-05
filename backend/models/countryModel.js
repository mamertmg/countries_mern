const mongoose = require("mongoose");

const CountrySchema = new mongoose.Schema({
  user:{
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
    type: String,
  },
  flag: {
    type: Object,
  },
  map:{
    type: Object,
  }
});

module.exports = mongoose.model("Country", CountrySchema);
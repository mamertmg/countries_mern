const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CountrySchema = new Schema({
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
});

const Country = mongoose.model("country", CountrySchema);

module.exports = { Country };
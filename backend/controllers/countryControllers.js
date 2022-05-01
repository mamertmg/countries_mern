const asyncHandler = require('express-async-handler')

const Country = require('../models/countryModel')
const User = require('../models/userModel')

// @desc    Get countryies
// @route   GET /api/countries
// @access  Private
const getAll = asyncHandler(async (req, res) => {
  const countries = await Country.find({ user: req.user.id })

  res.status(200).json(countries)
})

// @desc    Save country
// @route   POST /api/countries
// @access  Private
const saveCountry = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }

  const country = await Country.create({

    user: req.user.id,
    name: req.body.name,
    capital: req.body.capital,
    region: req.body.region,
    population: req.body.population,
    flag: req.body.flag
  })

  res.status(200).json(country)
})

// @desc    Delete country
// @route   DELETE /api/countries/:id
// @access  Private
const deleteCountry = asyncHandler(async (req, res) => {
  const country = await Country.findById(req.params.id)

  if (!country) {
    res.status(400)
    throw new Error('Goal not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the goal user
  if (country.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  await country.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getAll,
  saveCountry,
  deleteCountry,
}
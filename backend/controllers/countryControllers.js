const asyncHandler = require('express-async-handler')

const Country = require('../models/countryModel')
const User = require('../models/userModel')

// @desc    Get countryies
// @route   GET /api/countries
// @access  Private
const getAll = asyncHandler(async (req, res) => {

  // Get user using the id in the JWT
  const user = await User.findById(req.user.id)

  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }

  const countries = await Country.find({ user: req.user.id })

  return res.status(200).json(countries)
})

// @desc    Save country
// @route   POST /api/countries
// @access  Private
const saveCountry = asyncHandler(async (req, res) => {

  // Get user using the id in the JWT
  const user = await User.findById(req.user.id)

  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }

  const country = await Country.create({
    user: user,
    name: req.body.name,
    capital: req.body.capital,
    region: req.body.region,
    population: req.body.population,
    flag: req.body.flags,
    map: req.body.maps
  })

  return res.status(201).json()
})

// @desc    Delete country
// @route   DELETE /api/countries/:id
// @access  Private
const deleteCountry = asyncHandler(async (req, res) => {

  // Get user using the id in the JWT
  const user = await User.findById(req.user.id)

  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }
  
  const country = await Country.findById(req.params.id)

  if (!country) {
    res.status(400)
    throw new Error('Country not found')
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
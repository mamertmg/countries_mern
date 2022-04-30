const express = require('express')
const router = express.Router();

const {getAll, deleteCountry, updateCountry, saveCountry} = require('../controllers/countryControllers')

router.get('/', getAll)

router.post('/', saveCountry)

router.put('/:id', updateCountry)

router.delete('/:id', deleteCountry)

module.exports = router
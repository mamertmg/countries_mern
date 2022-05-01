const express = require('express')
const router = express.Router();

const {getAll, deleteCountry, saveCountry} = require('../controllers/countryControllers')
const { protect } = require('../middleware/authMiddleware')

router.get('/', protect, getAll)

router.post('/', protect, saveCountry)

router.delete('/:id', protect, deleteCountry)

module.exports = router
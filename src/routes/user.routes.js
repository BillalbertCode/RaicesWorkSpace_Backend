const express = require('express')
const registerUser = require('../controllers/user.controller')

const router = express.Router()

//Methodos  
router.post('/', registerUser)

module.exports = router;
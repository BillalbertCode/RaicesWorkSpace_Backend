const express = require('express')
const registerUser = require('../controllers/userRegister.controller')
const loginUser = require('../controllers/userLogin.controller')
const userData = require('../controllers/userData.controller')
const authToken = require('../middlewares/authToken.middleware')
const router = express.Router()

//Methodos

//Registro
router.post('/register', registerUser)

//Login
router.post('/login', loginUser)

// Autenticacion para mandar los datos
router.get('/profile', authToken, userData)

module.exports = router;
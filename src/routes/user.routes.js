const express = require('express')
const registerUser = require('../controllers/userRegister.controller')
const loginUser = require('../controllers/userLogin.controller')
const userData = require('../controllers/userData.controller')
const userProfilePublic = require('../controllers/userProfilePublic.controller')
const userModifyData = require('../controllers/userModifyData.controller')
const userDelete = require('../controllers/userDelete.controller')
const authToken = require('../middlewares/authToken.middleware')
const router = express.Router()

//Methodos

//Registro
router.post('/register', registerUser)

//Login
router.post('/login', loginUser)

// Profile con los datos completos del usuario y sus permisos
router.get('/profile', authToken, userData)
router.put('/profile', authToken, userModifyData) //Modificar datos del usuario
router.delete('/profile', authToken, userDelete) //Eliminar Usuario

// Profile Public other User
router.get('/profile/:id', userProfilePublic)

module.exports = router;
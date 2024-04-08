const express = require('express')
const articleCreate = require('../controllers/articleCreate.controller')
const articleDelete = require('../controllers/articleDelete.controller')
const articleAllGet = require('../controllers/articleAllGet.controller')
const articleUser = require('../controllers/articleUser.controller') 
const authToken = require('../middlewares/authToken.middleware')
const router = express.Router()

//Methodos

//Creacion de articulos
router.post('/', authToken, articleCreate)

//Eliminacion de Articulos
router.delete('/:id', authToken, articleDelete )

//Obtener Todos los Articulos
router.get('/', articleAllGet)

//Obtener articulos de un usuario
router.get('/user/:userId', articleUser )

module.exports = router;

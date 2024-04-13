const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// Login de Usuarios
const loginUser = async (req, res) => {
    const { username, email, password } = req.body

    // validacion de campos
    if (!username && !email) {
        return res.status(400).json({ message: 'Al menos uno de los siguientes campos son requeridos: username, email' })
    }

    try {
        //validacion de usuarios o email existete
        const user = await User.findOne({ $or: [{ username }, { email }] })

        if (!user) {
            const error = new Error('Usuario o email Invalido')
            error.status = 404
            throw error
        }

        // validacion de contraseñas
        const validatePassword = await bcrypt.compare(password, user.password)

        if (!validatePassword) {
            const error = new Error('Contraseña Invalida')
            error.status = 400
            throw error
        }

        //Generacion de Token si la contraseña es valida
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '1h'
        })

        res.status(200).json({ token })
    } catch (error) {
        console.error('Error en el servidor', error)
        res.status(error.status || 500).json({ error: error.message })
    }
}

module.exports = loginUser;
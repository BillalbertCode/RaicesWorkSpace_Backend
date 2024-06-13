const User = require('../models/user.model')
const jwt = require('jsonwebtoken')

// Registro de usuarios
const registerUser = async (req, res) => {
    const { username, email, name, lastName, password, birthDate, sex,profileIconUrl } = req.body;

    try {
        // Verificacion de Usuario e email no duplicate
        let user = await User.findOne({ $or: [{ username }, { email }] })

        if (user) {
            //String para mostrar el tipo de error
            const mensaje = 'ya ha sido registrado'

            // Send error
            const error = new Error
            error.status = 400
            error.message = {}
            // Controlamos Los errores
            if (user.username === username) {
                error.message.username = `Este Usuario ${mensaje}`
            }
            if (user.email === email) {
                error.message.email = `Este Email ${mensaje}`
            }
            throw error
        }

        user = new User({ username, email, name, lastName, password, birthDate, sex, profileIconUrl })

        // Validate Campos
        await user.validate()

        // Save User
        await user.save();

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '1h'
        })

        res.status(201).json({
            login: true,
            id: user._id,
            token: token,
            message: "Usuario Registrado exitosamente"
        })

    } catch (error) {
        // Control de error de mongoose
        if (error.name === 'ValidationError') {
            res.status(400).json({ message: error.message })
        } else {
            res.status(error.status || 500).json({ error: error.message })
        }
        console.error('Error en el servidor', error.message)
    }
}

module.exports = registerUser;
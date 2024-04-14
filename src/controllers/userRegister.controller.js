const User = require('../models/user.model')

// Registro de usuarios
const registerUser = async (req, res) => {
    const { username, email, name, lastName, password, gear, sex } = req.body;

    try {
        // Verificacion de Usuario e email no duplicate
        let user = await User.findOne({ $or: [{ username }, { email }] })

        if (user) {
            //String para mostrar el tipo de error
            let property

            if (user.username === username) {
                property = 'Este Usuario'
            } else if (user.email === email) {
                property = 'Este Email'
            }
            // Send error
            const error = new Error(`${property} ya ha sido registrado`)
            error.status = 400
            throw error
        }

        user = new User({ username, email, name, lastName, password, gear, sex })

        // Validate Campos
        await user.validate()

        // Save User
        await user.save();
        res.status(201).json({ message: "Usuario Registrado exitosamente" })

    } catch (error) {
        // Control de error de mongoose
        if (error.name === 'ValidationError') {
            res.status(400).json({ message: error.message })
        } else {
            res.status(error.status || 500).json({ error: error.message })
        }
        console.error('Error en el servidor', error)
    }
}

module.exports = registerUser;
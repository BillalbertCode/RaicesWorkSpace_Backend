const User = require('../models/user.model')

// Registro de usuarios
const registerUser = async (req, res) => {
    const { username, email, name, lastName, password, gear, sex } = req.body;
    
    try {
        // Verificacion de Usuario e email no duplicate
        let user = await User.findOne({ $or: [{ username }, { email }] })

        if (user) {
            if (user.username == username && user.email == email) {
                return res.status(400).json({ error: "Este usuario y email ya han sido registrado" })
            } else if (user.email == email) {
                return res.status(400).json({ error: "Este email ya a sido registrado" })
            } else if (user.username == username) {
                return res.status(400).json({ error: "Este usuario ya a sido registrado" })
            }
        }

        // add new user 
        user = new User({ username, email, name, lastName, password, gear, sex })
        await user.save();

        res.status(201).json({ message: "Usuario Registrado exitosamente" })

    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Error en el servidor" })
    }
}

module.exports = registerUser;
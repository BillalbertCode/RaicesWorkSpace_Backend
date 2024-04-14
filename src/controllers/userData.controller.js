const User = require('../models/user.model')

//Datos completos del Usuario
const userData = async (req, res) => {

    try {
        //pedimos las id proporcionada por el tokenAuth
        const userId = req.user.id

        // Buscamos al usuario por la id
        const user = await User.findById(userId)

        if (!user) {
            const error = new Error('Usuario not Found')
            error.status = 404
            throw error
        }
        //enviamos datos
        res.json( user )
    } catch (error) {
        console.error('Error en el servidor', error)
        res.status(error.status || 500).json({ error: error.message })
    }
}

module.exports = userData;
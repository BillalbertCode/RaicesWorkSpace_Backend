const User = require('../models/user.model')

const userProfilePublic = async (req, res) => {

    try {
        // buscamos el usuario
        const { id } = req.params
        //Depuramos el usuario para uso publico 
        const user = await User.findById(id).select('-password -_id').lean()

        // Validacion de usuario
        if (!user) {
            const error = new Error('User Not Found')
            error.status = 404
            throw error
        }

        //enviamos la informacion
        res.status(200).json(user)
    } catch (error) {
        // Error de formato en el id
        if (error.name === 'CastError') {
            res.status(400).json({ error: 'Formato del Id No valido' })
        } else {
            res.status(error.status || 500).json({ error: error.message })
        }

        console.error('Server Error', error)
    }
}

module.exports = userProfilePublic  
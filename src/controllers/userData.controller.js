const User = require('../models/user.model')

//Datos completos del Usuario
const userData = async (req, res) =>{

    try{
        //pedimos las id proporcionada por el tokenAuth
        const userId = req.user.id

        // Buscamos al usuario por la id
        const user = await User.findById(userId)

        if(!user){
            return res.status(404).json({error: 'usuario no encontrado'})
        }
        //enviamos datos
        res.json({user})
    }catch (error){
        console.error(error)
        return res.status(500).json({error: 'Error al buscar el usuario' })
    }
}

module.exports = userData;
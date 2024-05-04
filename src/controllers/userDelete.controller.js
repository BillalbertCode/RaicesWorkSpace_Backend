const User = require('../models/user.model')
const userDelete= async (req, res) =>{
    try{
        const userId = req.user.id

        //Eliminamos el usuario por id proporcionada por el token
        const user = await User.findById(userId)

        if (!user) {
            const error = new Error('Usuario no encontrado')
            error.status = 404
            throw error
        }

        await User.findByIdAndDelete(userId)
        res.status(200).json({message: 'Usuario Eliminado'})
    }catch (error){
        console.error('Server Error', error)
        res.status(error.status || 500).json({error: error.message})
    }
}

module.exports = userDelete;
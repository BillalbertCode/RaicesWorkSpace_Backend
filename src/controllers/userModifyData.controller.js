const User = require('../models/user.model')

const userModifyData = async (req, res) => {
    const { email, name, lastName, birthDate, sex } = req.body

    // Al menos algun campo lleno
    const requiredCampos = ['email', 'name', 'lastName', 'birthDate', 'sex']

    try {
        const userId = req.user?.id
        
        //Comprobamos que alguno de los campos alla sido rellenado
        const haveOneCampo = requiredCampos.some(field => !!req.body[field]);
        
        if (!haveOneCampo) {
            const error = new Error('Alguno de los campos debe ser rellenado')
            error.status = 400
            throw error
        }

        // actualizamos el usuario
       await User.findByIdAndUpdate(userId, { email, name, lastName, birthDate, sex }, { new: true })

        //Enviamos el usuario
        res.status(200).json({ message: 'Usuario actualizado exitosamente' });
    }catch (error){
        console.error('Server Error', error)
        res.status(error.status || 500).json({message: error.message})
    }
}

module.exports = userModifyData;
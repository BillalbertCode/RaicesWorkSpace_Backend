const User = require('../models/user.model')

const userModifyData = async (req, res) => {
    const { email, name, lastName, birthDate, sex, profileIconUrl } = req.body

    // Al menos algun campo lleno
    const requiredCampos = ['email', 'name', 'lastName', 'birthDate', 'sex', 'profileIconUrl']

    try {
        const userId = req.user?.id

        let user = await User.findOne({ email })

        if (user) {
            //String para mostrar el tipo de error
            const mensaje = 'ya ha sido registrado'

            // Send error
            const error = new Error
            error.status = 400
            error.message = {}
            // Controlamos Los errores
            if (user.email === email) {
                error.message.email = `Este Email ${mensaje}`
            }
            throw error
        }
        //Comprobamos que alguno de los campos alla sido rellenado
        const haveOneCampo = requiredCampos.some(field => !!req.body[field]);

        if (!haveOneCampo) {
            const error = new Error('Alguno de los campos debe ser rellenado')
            error.status = 400
            throw error
        }

        // actualizamos el usuario
        await User.findByIdAndUpdate(userId, { email, name, lastName, birthDate, sex, profileIconUrl }, { new: true })

        //Enviamos el usuario
        res.status(200).json({ message: 'Usuario actualizado exitosamente' });
    } catch (error) {
        console.error('Server Error', error.message)
        res.status(error.status || 500).json({ error: error.message })
    }
}

module.exports = userModifyData;
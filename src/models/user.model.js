const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const { genSalt, hash } = bcrypt
// Scheme User
const userScheme = new mongoose.Schema({
    username: { type: String, required: { message: 'El campo username no puede estar vacio' }, unique: true },
    email: { type: String, required: { message: 'El campo email no puede estar vacio' }, unique: true },
    name: { type: String, required: { message: 'El campo name no puede estar vacio' } },
    lastName: { type: String, required: { message: 'El campo lastName no puede estar vacio' } },
    password: { type: String, required: { message: 'El campo password no puede estar vacio' } },
    gear: { type: Number, required: { message: 'El campo gear no puede estar vacio' } },
    sex: { type: String, required: { message: 'El campo sex no puede estar vacio' } },
    createAt: { type: Date, default: Date.now }
})

// Midleware para encriptar la contraseña antes de guardarla
userScheme.pre('save', async function (next) {
    const usuario = this;
    
    // Solo encriptar la contraseña si ha sido modificada o es nueva
    if (!usuario.isModified('password')) {
        return next()
    }

    // add password encriptada
    try {
        const salt = await genSalt(10)
        const hashedPassword = await hash(usuario.password, salt)
        usuario.password = hashedPassword
        next();
    } catch (error) {
        return next(error)
    }
})

const User = mongoose.model('User', userScheme)
module.exports = User;
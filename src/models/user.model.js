const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const {genSalt, hash} = bcrypt
// Scheme User
const userScheme = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    lastName: {type: String, required: true},
    password: {type: String, required: true},
    gear: {type: Number, required: true},
    sex: {type: String, required: true},
    createAt: {type: Date, default: Date.now }
})

// Midleware para encriptar la contraseña antes de guardarla
userScheme.pre('save', async function (next){
    const usuario = this;
    // Solo encriptar la contraseña si ha sido modificada o es nueva
    if(!usuario.isModified('password')){
        return next()
    }
    // add password encriptada
    try{
        const salt = await genSalt(10)
        const hashedPassword = await hash(usuario.password, salt)
        usuario.password = hashedPassword
        next();
    }catch (error){
        return next(error)
    }
})

const User = mongoose.model('User', userScheme)
module.exports = User;
const mongoose = require('mongoose')

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

const User = mongoose.model('User', userScheme)
module.exports = User;
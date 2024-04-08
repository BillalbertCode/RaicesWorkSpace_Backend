const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
    title: {type: String},
    content: {type:String},
    imagenURL: {type:String},
    videoURL:{type: String},
    audioURL:{type: String},
    author: {type: mongoose.Schema.Types.ObjectId, ref:'User', require: true},
    createAt: { type: Date, default: Date.now }
}) 

const Article = mongoose.model('Article', articleSchema)

module.exports = Article;
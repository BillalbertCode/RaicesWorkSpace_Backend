const Article = require('../models/article.model')

const articleAllGet = async (req,res) =>{
    try {
        // Obtenemos los articles de la DB en orden de recientes
        const articles = await Article.find().sort({createAt: -1})

        if(articles.lenght === 0){
            return res.status(404).json({message:'Articles not found'})
        }
        
        res.status(200).json({articles})
    }catch (error){
        console.error(error)
        return res.status(500).json({error: 'Server Error'})        
    }
}

module.exports = articleAllGet
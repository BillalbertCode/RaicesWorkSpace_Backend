const Article = require('../models/article.model')

const articleUser = async (req,res) =>{
    try{
        //Obtenemos el id del Usuario por el url
        const {userId} = req.params

        // Busqueda de articulos por author(userId) ordenado por fecha mas reciente
        const articles = await Article.find({author: userId}).sort({createAt: +1})
        
        //Revisamos que tenga algun articulo
        if(articles.length === 0){
            return res.status(404).json({message:'Articles not found'})
        }
        //enviamos la informacion
        res.status(200).json(articles)
    }catch (error){
        console.error(error)
        res.status(500).json({error:'Server Error'})
    }
}

module.exports = articleUser;
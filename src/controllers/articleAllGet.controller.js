const Article = require('../models/article.model')
const User = require('../models/user.model')

const articleAllGet = async (req, res) => {
    // Paginacion para cargar
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const skip = (page - 1 ) * limit

    try {
        // Obtenemos los articles de la DB en orden de recientes
        const articles = await Article.find().skip(skip).limit(limit).sort({createAt: -1})

        //Manejo de error articulos no encotrados
        if (articles.lenght === 0) {
            const error = new Error('Articles not found')
            error.status = 404
            throw error
        }

        //Declaracion de articulos
        const articlesSend = []
        
        // ciclo para encotrar los autores de cada articulo
        for (const article of articles) {

            const authors = await User.findById(article.author.toString())
            
            //Salto de Articulo si no encuentra el author
            //Significa que no tiene author... Crear funcion para borrar el articulo automaticamente
            if (authors === null){
                continue;
            }
            // Formato de cada articleCard
            articlesSend.push({
                _id: article._id,
                title: article.title,
                content: article.content,
                author: {
                    _id: authors._id,
                    username: authors.username,
                    name: authors.name,
                    lastName: authors.lastName
                },
                createAt: article.createAt
            })
        }
        //mandamos el array de todos los objetos
        res.status(200).json(articlesSend)
    } catch (error) {
        console.error('Server Error', error)
        res.status(error.status || 500).json({ error: error.message })
    }
}

module.exports = articleAllGet
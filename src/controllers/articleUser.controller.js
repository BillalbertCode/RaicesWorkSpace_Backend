const Article = require('../models/article.model')
const User = require('../models/user.model')

const articleUser = async (req, res) => {
    // Paginacion para cargar
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const skip = (page -1) * limit
    try {
        //Obtenemos el id del Usuario por el url
        const { userId } = req.params

        // Busqueda de articulos por author(userId) ordenado por fecha mas reciente
        const articles = await Article.find({ author: userId }).skip(skip).limit(limit).sort({ createAt: -1 })

        //Revisamos que tenga algun articulo
        if (articles.length === 0) {
            const error = new Error('Articles not found')
            error.status = 404
            throw error
        }
        //Declaracion de articulos
        const articlesSend = []
        
        // ciclo para encotrar los autores de cada articulo
        for (const article of articles) {

            const authors = await User.findById(userId)
            
            //Salto de Articulo si no encuentra el author
            
            // Formato de cada articleCard
            articlesSend.push({
                _id: article._id,
                title: article.title,
                content: article.content,
                author: {
                    _id: authors._id,
                    username: authors.username,
                    name: authors.name,
                    lastName: authors.lastName,
                    profileIconUrl: authors.profileIconUrl
                },
                createAt: article.createAt
            })
        }
        //enviamos la informacion
        res.status(200).json(articlesSend)
    } catch (error) {
        console.error('Error en el servidor', error)
        res.status(error.status || 500).json({ error: error.message })
    }
}

module.exports = articleUser;
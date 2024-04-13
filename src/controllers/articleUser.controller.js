const Article = require('../models/article.model')

const articleUser = async (req, res) => {
    try {
        //Obtenemos el id del Usuario por el url
        const { userId } = req.params

        // Busqueda de articulos por author(userId) ordenado por fecha mas reciente
        const articles = await Article.find({ author: userId }).sort({ createAt: +1 })

        //Revisamos que tenga algun articulo
        if (articles.length === 0) {
            const error = new Error('Articles not found')
            error.status = 404
            throw error
        }
        //enviamos la informacion
        res.status(200).json(articles)
    } catch (error) {
        console.error('Error en el servidor', error)
        res.status(error.status || 500).json({ error: error.message })
    }
}

module.exports = articleUser;
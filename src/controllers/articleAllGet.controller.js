const Article = require('../models/article.model')

const articleAllGet = async (req, res) => {
    try {
        // Obtenemos los articles de la DB en orden de recientes
        const articles = await Article.find().sort({ createAt: +1 })

        //Manejo de error articulos no encotrados
        if (articles.lenght === 0) {
            const error = new Error('Articles not found')
            error.status = 404
            throw error
        }

        res.status(200).json({ articles })
    } catch (error) {
        console.error('Server Error', error)
        res.status(error.status || 500).json({ error: error.message })
    }
}

module.exports = articleAllGet
const Article = require('../models/article.model')

const articleDelete = async (req, res) => {
    // Extraemos el Author
    const authorId = req.user?.id

    try {
        // Extraccion de id del articulo
        const { id } = req.params

        // Busqueda de articulo por id
        const article = await Article.findById(id)

        if (!article) {
            const error = new Error('Articulo no encontrado')
            error.status = 404
            throw error
        }

        // Comparacion de credeneciales, para que solo pueda borrar si es el author
        if (article.author.toString() !== authorId) {
            const error = new Error('No tienes los permisos Necesarios')
            error.status = 401
            throw error
        }

        // Eliminacion del articulo
        await Article.findByIdAndDelete(id)
        res.status(200).json({ message: 'Articulo Eliminado' })
    } catch (error) {
        console.error('Server Error', error)
        res.status(error.status || 500).json({ error: error.message })
    }
}

module.exports = articleDelete;
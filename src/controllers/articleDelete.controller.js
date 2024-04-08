const Article = require('../models/article.model')

const articleDelete = async (req, res) => {
    // Extraemos el Author
    const author  = req.user.id

    try {
        // Extraccion de id del articulo
        const { id } = req.params

        // Busqueda de articulo por id
        const article = await Article.findById(id)

        if (!article) {
            return res.status(404).json({ message: 'Articulo no encontrado' })
        }

        // Comparacion de credeneciales, para que solo pueda borrar si es el author
        if (article.author.toString() !== author) { 
            return res.status(401).json({message: 'No tienes los permisos Necesarios' })
        }
        
        // Eliminacion del articulo
        await Article.findByIdAndDelete(id)
        res.status(200).json({message:'Articulo Eliminado'})
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Server Error' })
    }
}

module.exports = articleDelete;
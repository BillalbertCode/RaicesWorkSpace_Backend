const Article = require('../models/article.model')

const articleCreate = async (req, res) => {
    const { title, content, imagenURL, videoURL, audioURL } = req.body;

    // Al menos algun campo lleno
    const requiredCampos = ['title', 'content', 'imagenURL', 'videoURL', 'audioURL'];

    // Extraemos el id del author
    const authorId = req.user?.id;
    try {
        //validacion de campos
        const haveOneCampo = requiredCampos.some(field => !!req.body[field]);
        if (!haveOneCampo) {
            const error = new Error('Alguno de los campos debe ser rellenado')
            error.status = 400
            throw error
        }

        //comprovamos el author
        if (!authorId) {
            const error = new Error('No se pudo encontrar el ID del autor');
            error.status = 404;
            throw error;
        }

        //new article preparacion con el id del author
        let article = new Article({
            title, content, imagenURL, videoURL, audioURL, author: authorId
        })

        // Guradamos el articulo
        await article.save()
        res.status(201).json({ message: 'Articulo Creado' })
    } catch (error) {
        console.error('Server Error', error);

        // Control de error de mongoose
        if (error.name === 'ValidationError') {
            res.status(400).json({ error: error.message })
        }
        res.status(error.status || 500).json({ error: error.message })
    }
}

module.exports = articleCreate;
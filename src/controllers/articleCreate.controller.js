const Article = require('../models/article.model')

const articleCreate = async (req, res) => {
    const { title, content, imagenURL, videoURL, audioURL } = req.body;

    try {
        //validacion de campos
        if(!title && !content && !imagenURL && !videoURL && !audioURL){
            return res.status(400).json({error: 'Alguno de los campos debe ser rellenado'})
        }

        //new article preparacion con el id del author
        let article = new Article({
            title, content, imagenURL, videoURL, audioURL, author: req.user.id
        })
        // Guradamos el articulo
        await article.save()
        res.status(201).json({message: 'Articulo Creado'}) 
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' })
    }
}

module.exports = articleCreate;
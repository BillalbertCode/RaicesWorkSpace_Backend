const jwt = require('jsonwebtoken')

const authToken = (req, res, next) => {
    
    // Verificacion del header contenga el token
    const token = req.header('Authorization')

    if (!token) {
        return res.status(401).json({ error: 'Acceso denegado. Token no proporcionado' })
    }

    // verificacion del token
    try {
        const verifyToken = jwt.verify(token, process.env.JWT_SECRET)
        req.user = verifyToken
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Token no válido.' });
    }
}

module.exports = authToken
const express = require('express')
const connectDB = require('./config/db')
const userRouter = require('./routes/user.routes')
const articleRouter = require('./routes/article.routes')
const cors = require ('cors')
require('dotenv').config()

const app = express()
app.use(express.json())

// Origenes permitidos
const allowedOrigins = ['https://raicesworkspace.vercel.app'];

const corsOptions = {
  origin: function(origin, callback) {
    // Permitir solicitudes sin origen como Postman
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'El origen CORS no está permitido';
      console.log(`Origen no permitido: ${origin}`); // Logging para debug
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: 'GET, PUT, POST, DELETE',
  allowedHeaders: ['Content-Type', 'Authorization']
};

// Middleware para hacer llegar los datos
app.use(cors(corsOptions));

//Conect base de datos 
connectDB()

// Rutas de usuario
app.use('/user', userRouter)

// Rutas de Articles
app.use('/article', articleRouter)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

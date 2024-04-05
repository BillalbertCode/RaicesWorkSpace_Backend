const express = require('express')
const connectDB = require('./config/db')
const userRouter = require('./routes/user.routes')
require('dotenv').config()

const app = express()
app.use(express.json())
//Conect base de datos 
connectDB()

// Rutas de usuario
app.use('/user', userRouter)

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto: ${port}`);
});
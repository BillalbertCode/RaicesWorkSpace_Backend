const express = require('express')
const connectDB = require('./config/db')
const userRouter = require('./routes/user.routes')
const articleRouter = require('./routes/article.routes')
require('dotenv').config()

const app = express()
app.use(express.json())

//Midleware para hacer llegar los datos 
app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})
//Conect base de datos 
connectDB()

// Rutas de usuario
app.use('/user', userRouter)

// Rutas de Articles
app.use('/article', articleRouter)

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto: ${port}`);
});
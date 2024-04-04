const express = require('express')
const connectDB = require('./config/db')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000


connectDB()

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto: ${port}`);
});
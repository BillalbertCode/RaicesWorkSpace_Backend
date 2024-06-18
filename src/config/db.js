const mongoose = require('mongoose')
require('dotenv').config();

// Conexion de mongo
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL, {
            user: process.env.MONGO_USER,
            pass: process.env.MONGO_PASS,
            dbName: process.env.MONGO_DB_NAME
        })
        console.log("Mongo Connect")
    } catch (error) {
        console.error("Error connectig MongoDB", error)
    }
}
module.exports = connectDB;
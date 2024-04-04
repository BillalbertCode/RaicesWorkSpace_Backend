const mongoose = require('mongoose')
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL, {
            dbName: process.env.MONGO_DB_NAME
        })
        console.log("Mongo Connect")
    } catch (error) {
        console.error("Error connectig MongoDB", error)
    }
}
module.exports = connectDB;
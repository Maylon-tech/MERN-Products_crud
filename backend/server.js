import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'

const app = express()
dotenv.config()

connectDB()
app.get("/products", (req, res) => {
    
})


app.listen(5000, () => {
    console.error("Server started at port 5000")
})


// minatokiroisen77_db_user   --  LYU0yOxJXluH4JSn

// mongodb+srv://minatokiroisen77_db_user:LYU0yOxJXluH4JSn@store-crud.bofi5d7.mongodb.net/?appName=store-crud
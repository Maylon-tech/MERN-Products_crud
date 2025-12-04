import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import productsRoute from './routes/productsRoute.js'

const app = express()
const PORT = process.env.PORT || 5000
dotenv.config()
app.use(express.json())

// Rotas para API controller and routes in clean way
app.use("/api/products", productsRoute)

app.listen(PORT, () => {
    connectDB()
    console.error("Server started at port 5000", PORT)
})


// minatokiroisen77_db_user   --  LYU0yOxJXluH4JSn

// mongodb+srv://minatokiroisen77_db_user:LYU0yOxJXluH4JSn@store-crud.bofi5d7.mongodb.net/?appName=store-crud
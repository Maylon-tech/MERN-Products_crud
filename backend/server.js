import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import Product from './models/products.js'


const app = express()
dotenv.config()
app.use(express.json())

connectDB()

app.get("/products", (req, res) => {})

app.post("/api/products", async (req, res) => {
    const product = req.body

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success:false, message: "Please provide all fields." })
    }

    const newProduct = new Product(product)

    try {
        await newProduct.save()
        res.status(201).json({ success: true, data: newProduct })
    } catch (error) {
        console.error("Error in create product", error.message)
        res.status(500).json({ sucess: false, message: "Server Error" })
    }
})

app.delete("/api/products/:id", async (req, res) => {
    const { id } = req.params
    try {
        await Product.findByIdAndDelete(id)
        res.status(200).json({ success: true, message: "Product Deleted"})
    } catch (error) {
        console.error("Failed to delete.", error)
    }
    console.log("id", id)
})



app.listen(5000, () => {
    console.error("Server started at port 5000")
})


// minatokiroisen77_db_user   --  LYU0yOxJXluH4JSn

// mongodb+srv://minatokiroisen77_db_user:LYU0yOxJXluH4JSn@store-crud.bofi5d7.mongodb.net/?appName=store-crud
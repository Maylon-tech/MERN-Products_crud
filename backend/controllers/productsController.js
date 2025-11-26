import Product from "../models/products.js"



export const Products = async (req, res) => {
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
}
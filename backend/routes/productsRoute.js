import express from 'express'
import { Products } from '../controllers/productsController'
const router = express.Router()

router("/products", Products)


export default router
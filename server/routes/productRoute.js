const express = require('express')
const {addProduct} = require('../controllers/productController')
const Product = require('../models/productModel')

const router = express.Router()


router.post("/products", addProduct)

router.get("/products", async (req, res) => {
    try {
        const allProd = await Product.find()
        return res.status(200).send(allProd)
    } catch (err) {
        return res.status(500).json({message: err.message})
    }
})

module.exports = router
const Product = require('../models/productModel')

const addProduct = async (req, res) => {
    try {
        const {name, desc, price, stock} = req.body

        const newProduct = new Product({
            name,
            desc,
            price,
            stock
        })

        await newProduct.save()
        return res.status(201).send(newProduct)
    } catch (err) {
        return res.status(500).json({error: err.message})
    }
}




module.exports = {addProduct}
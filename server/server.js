const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const connectDB = require('./config/db')
const productRouter = require('./routes/productRoute')
const app = express()
app.use(express.json())
app.use(cors())

dotenv.config()


app.use("/api", productRouter)



app.get("/", (req, res) => {
    try {
        return res.status(200).json({message: "Backend is running!"})
    } catch (err) {
        return res.status(500).json({error: err.message})
    }
})




const PORT = process.env.PORT || 4000

app.listen(PORT, async() => {
    try {
        connectDB()
        console.log(`Server is listening on port http://localhost:${PORT}`)
    } catch (err) {
        console.error(err.message)
    }
})

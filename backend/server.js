import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'

dotenv.config()
connectDB()

const app = express()

app.get('/', (req,res)=>{
    res.send('API running...')
})

const PORT = process.env.PORT || 8040

app.listen(PORT, console.log(`server running on port ${PORT}`))
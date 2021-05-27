import express from 'express'
import dotenv from 'dotenv'


dotenv.config()
const app = express()

app.get('/', (req,res)=>{
    res.send('API running...')
})

const PORT = process.env.PORT || 8040

app.listen(PORT, console.log(`server running on port ${PORT}`))
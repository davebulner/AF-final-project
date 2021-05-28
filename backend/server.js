import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'


//routes
import conferenceRoutes from './routes/conferenceRoutes'

dotenv.config()
connectDB()

const app = express()

app.get('/', (req, res) => {
    res.send('API running...')
})

//calling routes
app.use('/api/conDetails', conferenceRoutes)

const PORT = process.env.PORT || 8040

app.listen(PORT, console.log(`server running on port ${PORT}`.brightYellow))
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import path from 'path'


//routes
import conferenceRoutes from './routes/conferenceRoutes.js'
import userRoutes from './routes/userRoutes.js'
import researcherRoutes from './routes/researchRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'

dotenv.config()

connectDB()

const app = express()


app.use(express.json())
app.get('/', (req, res) => {
    res.send('API running...')
})

//calling routes
app.use('/api/conDetails', conferenceRoutes)
app.use('/api/users', userRoutes)
app.use('/api/researcher', researcherRoutes)
app.use('/api/uploads', uploadRoutes)

const __dirname = path.resolve()
app.use('/documents', express.static(path.join(__dirname, '/documents')))

const PORT = process.env.PORT || 8040

app.listen(PORT, console.log(`server running on port ${PORT}`.brightYellow))
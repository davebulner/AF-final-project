import express from 'express'

const router = express.Router()

import { addConDetails } from '../controllers/conferenceController.js'

router.post('/addConDetails', addConDetails)

export default router
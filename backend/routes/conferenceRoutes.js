import express from 'express'

const router = express.Router()

import { addConDetails, getAllConDetails } from '../controllers/conferenceController.js'

router.post('/addConDetails', addConDetails)
router.get('/', getAllConDetails)

export default router
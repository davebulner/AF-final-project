import express from 'express'

const router = express.Router()

import { addConDetails, getAllConDetails, updateConDetails } from '../controllers/conferenceController.js'

router.post('/addConDetails', addConDetails)
router.get('/', getAllConDetails)
router.route('/:id').put(updateConDetails)

export default router
import express from 'express'

const router = express.Router()

import { addConDetails, getAllConDetails, updateConDetails } from '../controllers/conferenceController.js'
import { protect, editor } from '../middleware/authMiddleware.js'

router.post('/addConDetails', protect, editor, addConDetails)
router.get('/', getAllConDetails)
router.route('/:id').put(updateConDetails)

export default router
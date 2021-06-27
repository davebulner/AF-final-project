import express from 'express'

const router = express.Router()

import { addConDetails, getAllConDetails, updateConDetails, getUnApprovedConDetails, getApprovedConDetails } from '../controllers/conferenceController.js'
import { protect, editor } from '../middleware/authMiddleware.js'

router.post('/addConDetails', protect, editor, addConDetails)
router.get('/', getAllConDetails)
router.route('/:id').put(updateConDetails)
router.get('/approvedCon', getApprovedConDetails)
router.get('/unAprrovedCon', getUnApprovedConDetails)

export default router
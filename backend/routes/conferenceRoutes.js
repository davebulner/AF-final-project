import express from 'express'

const router = express.Router()

import { addConDetails, getAllConDetails, updateConDetails, getUnApprovedConDetails, getApprovedConDetails } from '../controllers/conferenceController.js'
import { protect, editor } from '../middleware/authMiddleware.js'

router.post('/addConDetails', protect, editor, addConDetails)
router.get('/', protect, editor, getAllConDetails)
router.route('/:id').put(updateConDetails)
router.get('/approvedCon', protect, editor, getApprovedConDetails)
router.get('/unAprrovedCon', protect, editor, getUnApprovedConDetails)

export default router
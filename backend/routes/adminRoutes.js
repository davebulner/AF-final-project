import express from 'express'
const router = express.Router()
import { updateConferenceDeatils, getEditorList, getReviwerList, getConferenceDetailsById } from '../controllers/adminController.js'
import { protect, admin } from '../middleware/authMiddleware.js'


router.put('/:id/approved', protect, admin, updateConferenceDeatils)
router.get('/:id', protect, admin, getConferenceDetailsById)
router.get('/editor', protect,admin, getEditorList)
router.get('/reviwer', protect,admin, getReviwerList)

export default router
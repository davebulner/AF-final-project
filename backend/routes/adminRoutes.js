import express from 'express'
const router = express.Router()
import { updateConferenceDeatils } from '../controllers/adminController.js'
import { protect, admin } from '../middleware/authMiddleware.js'


router.route('/:id/approve').put(protect, admin, updateConferenceDeatils)

export default router
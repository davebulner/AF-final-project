import express from 'express'
const router = express.Router()
import { updateConferenceDeatils } from '../controllers/adminController.js'
import { protect, admin } from '../middleware/authMiddleware.js'


router.put('/:id', protect, admin, updateConferenceDeatils)

export default router
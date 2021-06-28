import express from 'express'
const router = express.Router()
import { updateConferenceDeatils } from '../controllers/adminController'
import { protect, admin } from '../middleware/authMiddleware'


router.route('/:id/approve').put(protect, admin, updateConferenceDeatils)

export default router
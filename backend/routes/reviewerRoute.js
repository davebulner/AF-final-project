import express from 'express'
const router = express.Router()

import { getAllWorkshopDetails } from '../controllers/reviewerController.js'
import { protect, reviver } from '../middleware/authMiddleware.js'

router.get('/', protect, reviver, getAllWorkshopDetails)

export default router 
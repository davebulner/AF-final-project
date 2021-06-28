import express from 'express'

const router = express.Router()

import { createNews } from '../controllers/newsController.js'
import { protect, editor } from '../middleware/authMiddleware.js'

router.post('/addNews', protect, editor, createNews)

export default router



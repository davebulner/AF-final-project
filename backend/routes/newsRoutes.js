import express from 'express'

const router = express.Router()

import { createNews, updateNews, deleteNews } from '../controllers/newsController.js'
import { protect, editor } from '../middleware/authMiddleware.js'

router.post('/addNews', protect, editor, createNews)
router.route('/:id')
      .put(protect, editor, updateNews)
      .delete(protect, editor, deleteNews)
export default router



import express from 'express'

const router = express.Router()

import { createNews, updateNews, deleteNews, getAllNews, getAprrovedNews } from '../controllers/newsController.js'
import { protect, editor } from '../middleware/authMiddleware.js'

router.post('/addNews', protect, editor, createNews)
router.route('/:id')
      .put(protect, editor, updateNews)
      .delete(protect, editor, deleteNews)
router.get('/allNews', getAllNews)
router.get('/appNews', getAprrovedNews)


export default router



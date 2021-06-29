import express from 'express'

const router = express.Router()

import { createNews, updateNews, deleteNews, getAllNews, getAprrovedNews, getNewsById } from '../controllers/newsController.js'
import { protect, editor } from '../middleware/authMiddleware.js'

router.post('/addNews', protect, editor, createNews)
router.get('/allNews', getAllNews)
router.route('/:id')
      .get(protect, editor, getNewsById)
      .put(protect, editor, updateNews)
      .delete(protect, editor, deleteNews)
router.get('/appNews', getAprrovedNews)


export default router



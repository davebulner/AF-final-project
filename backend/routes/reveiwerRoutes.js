import express from 'express'
const router = express.Router()

import { insertReviewer, updateReviewer } from '../controllers/reviewerController.js'

router.post('/insertReviewer', insertReviewer)
router.route('/:id').put(updateReviewer)

export default router
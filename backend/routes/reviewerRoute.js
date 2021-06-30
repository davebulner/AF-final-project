import express from 'express'

const router = express.Router()

import { getAllReviewerDetails,getReviewerDetails } from '../controllers/reviewerController.js'

router.get('/',getAllReviewerDetails)
router.get('/',getReviewerDetails)

export default router 
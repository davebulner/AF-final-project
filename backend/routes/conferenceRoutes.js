import express from 'express'

const router = express.Router()

import { addConDetails } from '../controllers/conferenceController'

router.route('/').post(addConDetails)

export default router
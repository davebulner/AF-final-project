import express from 'express'
const router = express.Router()

import { insertResearcher, updateResearcher } from '../controllers/researchController.js'

router.post('/insertResearcher', insertResearcher)
router.route('/:id').put(updateResearcher)

export default router
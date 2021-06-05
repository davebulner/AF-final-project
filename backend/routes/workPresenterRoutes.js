import express from 'express'
const router = express.Router()

import { insertPresenter, updatePresenter } from '../controllers/workPresenterController.js'

router.post('/insertPresenter', insertPresenter)
router.route('/:id').put(updatePresenter)

export default router
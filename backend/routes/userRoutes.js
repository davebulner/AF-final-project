import express from 'express'
const router = express.Router()
import{ authUser, getUserProfile, registerUser } from '../controllers/userController.js'
import { getUsers, deleteUser, getadminConferenceDetails } from '../controllers/adminController.js'
import { protect, admin } from '../middleware/authMiddleware.js'


router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile)
router.route('/').post(registerUser)
router.route('/getUser').get(protect, admin, getUsers)
router.route('/:id').delete(protect,admin,deleteUser)
router.route('/getConferenceDetails').get(protect,admin,getadminConferenceDetails)
export default router
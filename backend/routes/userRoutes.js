import express from 'express'
const router = express.Router()
import { authUser, getUserProfile, registerUser, updateUserProfile, getUserById, updateUser, getAllUsers } from '../controllers/userController.js'
import { protect, admin } from '../middleware/authMiddleware.js'


router.post('/login', authUser)
router
    .route('/profile')
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile)
router.route('/').post(registerUser)
router.route(':/id')
    .get(protect, getUserById)
    .put(protect, updateUser)
router.get('/get', getAllUsers)

export default router
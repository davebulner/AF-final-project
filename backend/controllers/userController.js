import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'

// @desc auth user and get token
// @route POST /api/users/login
//@access Public

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if(user && (await user.matchPassword( password ))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            isEditor: user.isEditor,
            isReviwer: user.isReviwer,
            isUser: user.isUser,
            token : generateToken(user._id),
        })
    } else {
        res.status(401)
        console.log('invalid user')
    }
})


// @desc get user profile
// @route POST /api/users/profile
//@access Private

const getUserProfile = asyncHandler(async (req, res) => {
    res.send('Sucess')
    
})


export{ authUser, getUserProfile }
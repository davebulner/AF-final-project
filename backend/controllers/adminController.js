import User from '../models/userModel.js'
import generateTokens from '../utils/generateToken.js'
import ConferenceDetails from '../models/conferenceDetailsModel.js'

const getUsers = async(req, res) => {
    const users = await User.find({})
    res.json(users)
}

const deleteUser = async(req, res) => {
    const user = await User.findById(req.params.id)

    if(user){
        await user.remove()
        res.json({ message: 'User Removed'})
    } else {
        res.status(404)
        throw new Error ('User not found!')
    }
}

const getadminConferenceDetails = async(req, res) => {
    const conferenceDetails = await ConferenceDetails.find({})
    res.json(conferenceDetails)
}

export { getUsers, deleteUser, getadminConferenceDetails }
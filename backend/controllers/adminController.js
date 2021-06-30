import asyncHandler from 'express-async-handler'
import ConferenceDetails from '../models/conferenceDetailsModel.js'
import User  from '../models/userModel.js'



//approve conference
const updateConferenceDeatils = asyncHandler(async(req, res) => {
    const conference = await ConferenceDetails.findById(req.params.id)

    if(conference) {
        conference.isApproved = true
        const updateApprovel = await conference.save()

        res.json(updateApprovel)
    } else {
        res.status(404)
        throw new Error('Conference not found')
    }
})


const getEditorList = asyncHandler(async (req, res) => {
    const editors = await User.find({
        isEditor: true,
    })
    res.json(editors)

})

const getReviwerList = asyncHandler(async (req, res) => {
    const reviwer = await User.find({
        isReviwer: true,
    })
    res.json(reviwer)

})


//get sibgle conference details
const getConDetailsById = asyncHandler(async (req, res) => {
    const confDetails = await ConferenceDetails.findById(req.params.id)

    if (confDetails) {
          res.json({
                id: confDetails._id,
                conname: confDetails.conname,
                description: confDetails.description,
                organizer: confDetails.organizer,
                phone: confDetails.phone,
                email: confDetails.email,
                startDate: confDetails.startDate,
                endDate: confDetails.endDate,
                venue: confDetails.venue,
                isApproved: confDetails.isApproved,

          })
    } else {
          res.status(404)
          throw new Error('Conference Details not found')
    }
})


export { updateConferenceDeatils, getEditorList, getReviwerList, getConDetailsById }
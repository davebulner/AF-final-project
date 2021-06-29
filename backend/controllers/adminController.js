import asyncHandler from 'express-async-handler'
import ConferenceDetails from '../models/conferenceDetailsModel.js'
import User  from '../models/userModel.js'


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



const getConferenceDetailsById = asyncHandler(async (req, res) => {
    const conferenceDetails = await ConferenceDetails.findById(req.params.id)

    if (conferenceDetails) {
          res.json({
                _id: conferenceDetails._id,
                conname: conferenceDetails.conname,
                description: conferenceDetails.description,
                organizer: conferenceDetails.organizer,
                phone: conferenceDetails.phone,
                email: conferenceDetails.email,
                startDate: conferenceDetails.startDate,
                endDate: conferenceDetails.endDate,
                venue: conferenceDetails.venue,
                isApproved: conferenceDetails.isApproved,

          })
    } else {
          res.status(404)
          throw new Error('Conference Details not found')
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

export { updateConferenceDeatils, getEditorList, getReviwerList, getConferenceDetailsById }
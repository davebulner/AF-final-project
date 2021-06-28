import asyncHandler from 'express-async-handler'
import ConferenceDetails from '../models/conferenceDetailsModel.js'

const updateConferenceDeatils = asyncHandler(async(req, res) => {
    const conference = await ConferenceDetails.findById(req.params.id)

    if(conference) {
        conference.isApproved = true
        conference.approvedAt = Date.now()

        const updateApprovel = await conference.save()

        res.json(updateApprovel)
    } else {
        res.status(404)
        throw new Error('Conference not found')
    }
})


export { updateConferenceDeatils }
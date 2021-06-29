import asyncHandler from 'express-async-handler'
import ConferenceDetails from '../models/conferenceDetailsModel.js'
//import Editors from '../models/userModel.js'


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

// const getEditorList = asyncHandler(async(req, res)=> {
//     const editors = await await Editors.find({})
//     res.json(editors)
// })


export { updateConferenceDeatils }
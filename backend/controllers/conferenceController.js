import asyncHandler from 'express-async-handler'
import ConferenceDetails from '../models/conferenceDetailsModel.js'

const addConDetails = asyncHandler(async (req, res) => {
      const conDetails = new ConferenceDetails({
            conname: 'conference Name',
            description: 'sample description',
            // user: req.user._id,
            organizer: 'add organizer',
            phone: '1234567809',
            email: 'add email',
            startDate: '12/12/21',
            endDate: '',
            venue: 'add venue',
            approved: false

      })

      const addConDetails = await conDetails.save()
      res.status(201).json(addConDetails)
})

export { addConDetails }
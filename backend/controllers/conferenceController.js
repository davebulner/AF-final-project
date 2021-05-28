import asyncHandler from 'express-async-hander'
import ConferenceDetails from '../models/conferenceDetailsModel'

const addConDetails = asyncHandler(async (req, res) => {
      const conDetails = new ConferenceDetails({
            conname: 'conference Name',
            description: 'sample description',
            user: req.user._id,
            organizer: 'add organizer',
            phone: 'add phone',
            email: 'add email',
            startDate: 'add start date',
            endDate: 'add end date',
            venue: 'add venue',
            approved: false

      })

      const addConDetails = await product.save()
      res.status(201).json(addConDetails)
})
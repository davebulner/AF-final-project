import asyncHandler from 'express-async-handler'
import Workshop from '../models/workPresenterModel.js'




const getAllWorkshopDetails = asyncHandler(async (req, res) => {
  const workDetails = await Workshop.find({})
  res.json(workDetails)
})

export{ getAllWorkshopDetails }
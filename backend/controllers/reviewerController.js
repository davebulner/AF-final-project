import asyncHandler from 'express-async-handler'
import Reviewer from '../models/reviewerModel.js'

// @desc insert reviewer record 
// @route POST /api/reviewer
//@access Private

const insertReviewer = asyncHandler(async (req, res) => {
    const reviewer = new Reviewer({
        reveiwerEmail: 'Sample email',
        reveiwerPhoneNo: '1234567890',
        researchPaper: '/documents/sample.pdf'

    })

    const insertReviewer = await reviewer.save()
    res.status(201).json(insertReviewer)
})


const updateReviewer = asyncHandler(async (req, res) => {
    const {
        reveiwerEmail,
        reveiwerPhoneNo,
        researchPaper,
  } = req.body

  const reviewer = await Reviewer.findById(req.params.id)

  if(reviewer){
      reviewer.reveiwerEmail = reveiwerEmail
      reviewer.reveiwerPhoneNo = reveiwerPhoneNo
      reviewer.researchPaper = researchPaper

      const updateReviewer = await reviewer.save()
     res.json(updateReviewer)

  }else{
      
    res.status(404)
    throw new Error('reviewer details not found')
  }
  

  
})



export { insertReviewer, updateReviewer }
import asyncHandler from 'express-async-handler'
import Researcher from '../models/researchModel.js'

// @desc insert researcher record 
// @route POST /api/reviewer
//@access Private

const insertResearcher = asyncHandler(async (req, res) => {
    const researcher = new Researcher({
        researcherEmail: 'Sample email',
        researcherPhoneNo: '1234567890',
        researchPaper: '/documents/sample.pdf'

    })

    const insertResearcher = await researcher.save()
    res.status(201).json(insertResearcher)
})


const updateResearcher = asyncHandler(async (req, res) => {
    const {
        researcherEmail,
        researcherPhoneNo,
        researchPaper,
  } = req.body

  const researcher = await Researcher.findById(req.params.id)

  if(researcher){
    researcher.researcherEmail = researcherEmail
    researcher.researcherPhoneNo = researcherPhoneNo
    researcher.researchPaper = researchPaper

      const updateResearcher = await researcher.save()
     res.json(updateResearcher)

  }else{
      
    res.status(404)
    throw new Error('reviewer details not found')
  }
  

  
})



export { insertResearcher, updateResearcher }
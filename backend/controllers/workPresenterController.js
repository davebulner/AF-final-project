import asyncHandler from 'express-async-handler'
import Presenter from '../models/workPresenterModel.js'


// @desc insert researcher record 
// @route POST /api/reviewer
//@access Private

const insertPresenter = asyncHandler(async (req, res) => {
    const presenter = new Presenter({
        presenterEmail: 'Sample pres email',
        presenterPhoneNo: '1234567890',
        proposal: '/documents/sample.pdf'

    })

    const insertPresenter = await presenter.save()
    res.status(201).json(insertPresenter)
})


const updatePresenter = asyncHandler(async (req, res) => {
    const {
        presenterEmail,
        presenterPhoneNo,
        proposal,
  } = req.body

  const presenter = await Presenter.findById(req.params.id)

  if(presenter){
    presenter.presenterEmail = presenterEmail
    presenter.presenterPhoneNo =  presenterPhoneNo
    presenter.proposal = proposal

      const updatePresenter = await presenter.save()
     res.json(updatePresenter)

  }else{
      
    res.status(404)
    throw new Error('workshop presenter details not found')
  }
  
  
})



export { insertPresenter, updatePresenter }
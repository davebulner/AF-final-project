import asyncHandler from 'express-async-handler'
import News from '../models/newsModel.js'

const createNews = asyncHandler(async (req, res) => {
      const news = new News({
            date: '12/12/21',
            message: "message",
            isApproved: 'false',
      })
      const createdNews = await news.save()
      res.status(201).json(createdNews)
})


export { createNews }
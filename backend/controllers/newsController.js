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

const updateNews = asyncHandler(async (req, res) => {
      const {
            date,
            message,
            isApproved
      } = req.body

      const news = await News.findById(req.params.id)

      if (news) {
            news.date = date
            news.message = message
            news.isApproved = isApproved

            const updatedNews = await news.save()
            res.json(updatedNews)
      } else {
            res.status(404)
            throw new Error('News not found')
      }
})

const deleteNews = asyncHandler(async (req, res) => {
      const news = await News.findById(req.params.id)

      if (news) {
            await news.remove()
            res.json({ message: 'News removed' })
      } else {
            res.status(404)
            throw new Error('News not found')
      }


})

export { createNews, updateNews, deleteNews }
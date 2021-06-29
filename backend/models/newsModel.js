import mongoose from 'mongoose'

const NewsSchema = mongoose.Schema({

      date: {
            type: Date,
      },
      message: {
            type: String,
      },
      isApproved: {
            type: Boolean,
      }
})

const News = mongoose.model('News', NewsSchema)

export default News
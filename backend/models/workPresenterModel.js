import mongoose from 'mongoose'

const workPresenterDataSchema = mongoose.Schema({
  
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
  },

    presenterEmail: {
        type: String,
        required: true,
    },

    presenterPhoneNo: {
        type: Number,
        required: true,
    },

    proposal: {
        type: String,
        required: true,
    }

}, {
    timestamps: true
})

const Presenter = mongoose.model('WorkShop presenter', workPresenterDataSchema)

export default Presenter
import mongoose from 'mongoose'

const reviewerDataSchema = mongoose.Schema({
  
    reveiwerEmail: {
        type: String,
        required: true,
    },

    reveiwerPhoneNo: {
        type: Number,
        required: true,
    },

    researchPaper: {
        type: String,
        required: true,
    }

}, {
    timestamps: true
})

const Reviewer = mongoose.model('Reviewer', reviewerDataSchema)

export default Reviewer



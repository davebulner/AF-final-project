import mongoose from 'mongoose'

const reviwerDataSchema = mongoose.Schema({
   
    reviwerEmail: {
        type: String,
        required: true,
    },

    reviwerPhoneNo: {
        type: String,
        required: true,
    },

    researchPaper: {
        type: String,
        required: true,
    }

}, {
    timestamps: true
})

const Reviewer = mongoose.model('Reviwer', reviwerDataSchema)

export default Reviewer



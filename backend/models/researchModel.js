import mongoose from 'mongoose'

const researcherDataSchema = mongoose.Schema({
  
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
  },

    researcherEmail: {
        type: String,
        required: true,
    },

    researcherPhoneNo: {
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

const Researcher = mongoose.model('Researcher', researcherDataSchema)

export default Researcher



import mongoose from 'mongoose'

const userSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true  
    },
    password: {
        type: String,
        required: true    
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false   
    },
    isEditor: {
        type: Boolean,
        required: true,
        default: false  
    },
    isReviwer: {
        type: Boolean,
        required: true,
        default: false  
    },
    isUser: {
        type: Boolean,
        required: true,
        default: false  
    },

}, {
    timestamps: true

})

const User = mongoose.model('User', userSchema)

export default User
const mongoose = require('monoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type:String
    }
}, {timestamps: true})

const User = mongoose.model('User', userSchema)

module.exports = User
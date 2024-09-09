const { default: mongoose } = require('mongoose')
const moongoose = require('mongoose')

const userSchema = moongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please add a name']
        },
        email: {
            type: String,
            required: [true, 'Please add an email'],
            unique: true
        },
        password: {
            type: String,
            required: [true, 'Please add a password']
        }
    },
    {
        timestamps: true
    }
) 

module.exports = mongoose.model('User', userSchema)
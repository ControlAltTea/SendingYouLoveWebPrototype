const mongoose = require('mongoose')

const CurrentUserSchema = new mongoose.Schema({
    auth: { type: mongoose.Schema.Types.ObjectId, ref: 'UserLogin' },
    userProfileName: { type: mongoose.Schema.Types.ObjectId, ref: 'UserProfile' }
})

module.exports = mongoose.model('CurrentUserModel', CurrentUserSchema)
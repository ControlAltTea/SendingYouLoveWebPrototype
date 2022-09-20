const mongoose = require('mongoose')

const UserProfileSchema = new mongoose.Schema({
    userProfileName: { type: String, unique: true }
})

module.exports = mongoose.model('UserProfileModel', UserProfileSchema)
const mongoose = require('mongoose')

const UserProfileSchema = new mongoose.Schema({
    userProfileName: { type: String}
})

module.exports = mongoose.model('UserProfileModel', UserProfileSchema)
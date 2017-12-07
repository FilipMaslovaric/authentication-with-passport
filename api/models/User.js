const mongoose = require('./database')
const passportLocalMongoose = require('passport-local-mongoose')

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    role: String
})

userSchema.plugin(passportLocalMongoose, { 
    usernameField: 'email',
    usernameLowerCase: true, // Treat emails as case-insensitive
    session: false // We'll use JWT
})

const User = mongoose.model('User', userSchema)

module.exports = User
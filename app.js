const connectDB = require('./config/db')
const authRoutes = require('./routes/authRoutes')

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const flash = require('express-flash');
// initialize connect-mongo with session
const MongoStore = require('connect-mongo')(session);
const logger = require("morgan");

require('dotenv').config({ path: './config/.env' })
// Passport config
require('./config/passport')(passport)

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))

// Sessions
app.use(
    session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: false,
        // use mongoose to find the mongoStore object
        // mongoose.connection finds the DB_STRING from db.js
        store: new MongoStore({ mongooseConnection: mongoose.connection })
    }),
);


// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

app.use('/', authRoutes);

app.listen(process.env.PORT, () => {
    console.log('Server is running, you better catch it!')
})    
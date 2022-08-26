const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const exphs = require("express-handlebars");
const methodOverride = require("method-override");
// const passport = require("passport");
const session = require('express-session');
const MongoStore = require("connect-mongo");
const connectDB = require("./config/db");

// Load config
dotenv.config({ path: './config/config.env' });

// Passport config
// require('./config/passport')(passport)

// calls the connectDB function, located on the db.js
connectDB();

const app = express();

// Body Parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// LOGGING
if (process.env.NODE_ENV === 'development') {
    app.use(morgan("dev"));
}

// HANDLEBARS
//!Add .engine after "exphs" to prevent error
app.engine(
    '.hbs',
    exphs.engine({
        defaultLayout: "main",
        extname: '.hbs'
    })
);

app.set("view engine", ".hbs");

// checking if the user is in the database
// if not, there is no session
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URI
    })
}))

// app.use(passport.initialize());
// app.use((passport.session()));

// set global var
// app.use(function (req, res, next) {
//     res.locals.user = req.user || null;
//     next();
// })

/// testing gitignore

// Static folder
app.use(express.static(path.join(__dirname, 'public')))

// ROUTES
app.use("/", require("./routes/index"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))
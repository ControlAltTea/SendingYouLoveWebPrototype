const express = require('express')
const passport = require("passport");
const validator = require("validator");
const UserLogin = require("../models/UserLogin");

exports.getIndex = (req, res) => {
    try {
        console.log(`index user`, req.user);
        res.render('index', {
            title: 'Index'
        })
    } catch (err) {
        console.error(err)
    }
}

// if user exists, redirect /login
// if user doesn't exist,
// redirect to /signup
exports.getSignup = (req, res) => {
    try {
        if (req.user) {
            return res.redirect("/login");
        }
        console.log(`1`);
        res.render("signup", {
            title: "Create Account",
        });
    } catch (err) {
        console.error(err);
    }
};

// create user
// accepts signup information
// checks if the user information exists in the database
// if it already exists,
// redirect to /login
// if it does not exist,
// send a post request to the database with the information entered on the signup page
// redirect to /dashboard with the user information
exports.postSignup = (req, res, next) => {
    const validationErrors = [];
    if (!validator.isEmail(req.body.email))
        validationErrors.push({ msg: "Please enter a valid email address." });
    if (!validator.isLength(req.body.password, { min: 8 }))
        validationErrors.push({
            msg: "Password must be at least 8 characters long",
        });
    if (req.body.password !== req.body.confirmPassword)
        validationErrors.push({ msg: "Passwords do not match" });

    if (validationErrors.length) {
        req.flash("errors", validationErrors);
        console.log(`2`);
        return res.redirect("../signup");
    }
    req.body.email = validator.normalizeEmail(req.body.email, {
        gmail_remove_dots: false,
    });

    const user = new UserLogin({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
    });

    console.log(`user`, user);

    UserLogin.findOne(
        { $or: [{ email: req.body.email }, { userName: req.body.userName }] },
        (err, existingUser) => {
            if (err) {
                return next(err);
            }
            if (existingUser) {
                console.log(`existingUser`, existingUser);
                req.flash("errors", {
                    msg: "Account with that email address or username already exists.",
                });
                console.log(`3`);
                return res.redirect("../signup");
            }
            user.save((err) => {
                if (err) {
                    return next(err);
                }
                req.logIn(user, (err) => {
                    console.log(`trying to log in`);
                    console.log(`login User`, user);
                    if (err) {
                        return next(err);
                    }
                    res.redirect("/login");
                });
            });
        }
    );
};

// requests user information
// checking if you are logged
// if logged in
// redirect to /launch
// load launch.ejs
// if not logged in,
// redirect to /login
// load login.ejs
// checkLogin
exports.getLogin = (req, res) => {
    if (req.user) {
        console.log(`user logging`);
        return res.redirect("/dashboard");
    }
    res.render("login", {
        title: "Login"
    });
};

// sends login information
// checks if information is valid
// if it is valid
// redirects /launch
// if not, redirects to /login
// send a message that the username or password is incorrect
exports.postLogin = (req, res, next) => {
    const validationErrors = [];

    if (!validator.isEmail(req.body.email))
        validationErrors.push({ msg: "Please enter a valid email address." });
    if (validator.isEmpty(req.body.password))
        validationErrors.push({ msg: "Password cannot be blank." });

    if (validationErrors.length) {
        req.flash("errors", validationErrors);
        return res.redirect("/login");
    }
    req.body.email = validator.normalizeEmail(req.body.email, {
        gmail_remove_dots: false,
    });

    passport.authenticate("local", (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            console.log(`!user`);
            req.flash("errors", info);
            console.log(`info`, info);
            return res.redirect("/login");
        }
        req.logIn(user, (err) => {
            if (err) {
                return next(err);
            }
            req.flash("success", { msg: "Success! You are logged in." });
            console.log(`login successful`);
            res.redirect(req.session.returnTo || "/dashboard");
        });
    })(req, res, next);
};

exports.getDashboard = (req, res) => {
    try {
        res.render('dashboard',
            { title: 'dashboard' }
        )
    } catch (err) {
        console.error(err)
    }
}

// destroys the current user session
// redirect
// destroys current session information
exports.logout = (req, res) => {
    // req.session.destroy((err) => {
    //     if (err) {
    //         console.log("Error : Failed to destroy the session during logout.", err);
    //     }
    // });
    req.logout(() => {
        console.log(`req.user`, req.user)
        req.user = null;
        res.redirect("/");
    });
};


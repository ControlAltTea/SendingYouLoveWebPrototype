const express = require('express')
const passport = require("passport");
const validator = require("validator");
const User = require("../models/User");

exports.getIndex = (req, res) => {
    try {
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
        return res.redirect("../signup");
    }
    req.body.email = validator.normalizeEmail(req.body.email, {
        gmail_remove_dots: false,
    });

    const user = new User({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
    });

    console.log(`user`, user)

    User.findOne(
        { $or: [{ email: req.body.email }, { userName: req.body.userName }] },
        (err, existingUser) => {
            if (err) {
                return next(err);
            }
            if (existingUser) {
                req.flash("errors", {
                    msg: "Account with that email address or username already exists.",
                });
                return res.redirect("../signup");
            }
            user.save((err) => {
                if (err) {
                    return next(err);
                }
                req.logIn(user, (err) => {
                    console.log(`trying to log in`);
                    if (err) {
                        return next(err);
                    }
                    res.redirect("/dashboard");
                });
            });
        }
    );
};


// exports.postSignup = (req, res, next) => {
//     console.log(req.body.password, req.body.confirmPassword);

//     const validationErrors = [];
//     if (!validator.isEmail(req.body.email))
//         validationErrors.push({ msg: "Please enter a valid email address." });
//     if (!validator.isLength(req.body.password, { min: 8 }))
//         validationErrors.push({
//             msg: "Password must be at least 8 characters long",
//         });
//     if (req.body.password !== req.body.confirmPassword)
//         validationErrors.push({ msg: "Passwords do not match" });

//     if (validationErrors.length) {
//         req.flash("errors", validationErrors);
//         return res.redirect("../signup");
//     }
//     req.body.email = validator.normalizeEmail(req.body.email, {
//         gmail_remove_dots: false,
//     });

//     const user = new User({
//         userName: req.body.userName,
//         email: req.body.email,
//         password: req.body.password,
//     });

//     User.findOne(
//         { $or: [{ email: req.body.email }, { userName: req.body.userName }] },
//         (err, existingUser) => {
//             if (err) {
//                 return next(err);
//             }
//             if (existingUser) {
//                 req.flash("errors", {
//                     msg: "Account with that email address or username already exists.",
//                 });
//                 return res.redirect("../signup");
//             }
//             user.save((err) => {
//                 if (err) {
//                     return next(err);
//                 }
//                 req.logIn(user, (err) => {
//                     if (err) {
//                         return next(err);
//                     }
//                     res.redirect("/launch");
//                 });
//             });
//         }
//     );
// };

exports.getDashboard = (req, res) => {
    try {
        res.render('dashboard',
            { title: 'dashboard' }
        )
    } catch (err) {
        console.error(err)
    }
}


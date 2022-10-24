const express = require('express')
const passport = require("passport");
const validator = require("validator");
const UserLogin = require("../models/User");

exports.getIndex = (req, res) => {
    try {
        res.render('index', {
            title: 'Index'
        })
    } catch (err) {
        console.error(err)
    }
}

// instatiate objects outside the authController
// 
exports.getDashboard = (req, res) => {
    // console.log(`req.profile`, req.user.profile)
    const userProfileName = req.user.profile.userProfileName;
    console.log(`pronouns`, req.user)
    const userPronouns = req.user.profile.userPronouns;
    try {
        res.render('dashboard',
            {
                title: 'dashboard',
                userProfileName: userProfileName,
                userPronouns: userPronouns
            })
    } catch (err) {
        console.error(err)
    }
}
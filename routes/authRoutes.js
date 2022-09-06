const express = require('express')
const router = express.Router();

// const authController = require('./controllers/authController'); 
// const homeController = require('./controllers/homeController');
// const { ensureAuth, ensureGuest } = require('../middleware/auth')

// const Story = require('../models/Story')

//@desc Login/Landing Page
//@Route GET /
// router.get('/', ensureGuest, (req, res) => {
//     try {
//         res.render('login',
//             { layout: 'login' }
//         )
//     } catch (err) {
//         console.error(`err`, err)
//         res.render('error/404')
//     }
// })
exports.getIndex = (req, res) => {
    console.log(`reached index`);
    res.render('index',
        { title: 'Index' }
    )
    // try {
    //     console.log(`reached login`);
    //     res.render('login',
    //         { layout: 'login' }
    //     )
    // } catch (err) {
    //     console.log(`BEEP`)
    //     console.error(err)
    //     res.render('error/404')
    // }
}

module.exports = router;
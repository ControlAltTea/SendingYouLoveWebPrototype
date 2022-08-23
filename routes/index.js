const express = require('express')
const router = express.Router()
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


router.get('/', (req, res) => {
    console.log(`reached login`);
    res.render('login',
        { layout: 'login' }
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
})

module.exports = router
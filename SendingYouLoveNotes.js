 // Sending You Love
users = 
    [{
        userID: 1,
        birthday : "August 15, 1990",
        userTimezone : Date, // format is userInputtedDateCreated: "2022-08-07T08:19:55.849Z", mongoDB data (BSON) type
        availableToTalk : {
            onlineCheckbox : false, // checkBox to indicate you are available for your partner
            availabilityIcon : availabilityIcon,
        },
        partners : {
            2: {
                active: true,
                // checkbox, prompt user to hide profile if relationship is hidden
                hiddenProfile: true,
                relationshipStart: Date // yearly anniversary, format is relationshipStart: "2022-08-07T08:19:55.849Z", mongoDB data (BSON) type
            }
        },
        favorites: {
            favoriteColor: {
                applicable: true, // similar to "show", a checkbox to enable or disable at the user's discretion
                name: " ",
                icon: null // Use a color picker to allow the user to pick the precise color
                // display color in a small square icon with slightly rounded corners
            },
            favoriteMeal: {
                applicable: true, // similar to "show", a checkbox to enable or disable at the user's discretion
                name: " ",
                icon: null // a dropdown menu of emojis with generic categories
            },
            favoriteTreat: {
                applicable: true, // similar to "show", a checkbox to enable or disable at the user's discretion
                name: " ",
                icon: null // a dropdown menu of emojis with generic categories
            },
            favoriteMovie: {
                applicable: true, // similar to "show", a checkbox to enable or disable at the user's discretion
                name: " ",
            },
            favoriteShow: {
                applicable: true, // similar to "show", a checkbox to enable or disable at the user's discretion
                name: " ",
            },
            favoriteHobby: {
                applicable: true, // similar to "show", a checkbox to enable or disable at the user's discretion
                name: " ",
            },
        // tell your partner about your day
        dayRating : {
            date: rating, // timestamp : (1-5), timestamp is to track the day
            comments: "" // user input string to make comment about day
        },
        // check-in geared towards checking in on state of the relationship
        // check-in frequency can be set from Settings
        // frequency is every 2 weeks, once a month, once every two months
        // check-ins are optional, but frequency sends the users a reminder
        // users get one user-driven prompt depending on Setting
        // button will grey out after each use
        // if user attempts to press the button before the frequency period is up, they will be prompted
        // to either update the setting or get in touch with their partner(s) through some other means
        // not to be used as a daily tool
        needCheckin : {
            show: true, // similar format to hiddenProfile above
            lastSent: Date.now, //
            message : ""
        },
        loveLanguages: {
        // PHYSICAL TOUCH
            physicalTouch : {
                needHug: {
                    show: true, // similar format to hiddenProfile above
                    lastSent: Date.now, //
                    message: ""
                    // Hugging
                        // User1 sends a "hugging" prompt
                        // User2 receives a message that says "Your partner would like to give you a hug"
                        // User2 has to accept
                        // Both users hold a button - vibration feedback (deep breaths) to indicate both users are engaging in hugging each other
                        // Icon appears in the top right corner to indicate that the users are hugging
                },
                holdingHands: {
                    show: true, // similar format to hiddenProfile above
                    lastSent: Date.now, //
                    message: ""
                    // Holding hands
                        // User1 clicks "Request hand" button
                        // User2 receives a notification about the requested hand
                        // User2 has to accept
                        // Both users hold a button - vibration feedback (heartbeat?) to indicate both users are engaging in hand holding
                        // Icon appears in top right corner to indicate that hands are being held
                },
                kisses: {
                    show: true,
                    lastSent: Date.now,
                    message: ""
                    // Sending kisses
                        // User1 sends a "kiss" prompt
                        // User2 receives a message that says "You partner would like to give you a kiss"
                        // User2 has to accept
                        // User1 double taps their button
                        // User2 receives a vibration feedback to indicate that they have received a kiss
                        // A prompt will appear to reciprocate the kiss
                        // User2 can then double tap their button to send a kiss
                },
            },
        // GIFT GIVING
            giftGiving: {
                sendingFlowers: {
                    show: true, // similar format to hiddenProfile above
                    lastSent: Date.now, //
                    message: ""
                    // Sending flowers
                        // The sending user can press a prompt to send flowers
                        // They can select between multiple options of bouqets and flowers types / colors
                        // The receiving user will receive a notification that their partner has sent them flowers
                        // The flowers will appear with a small, bell-like jingle, then the bouqet will move to the top right and stay as an icon for about 3 hours
                },
                sendingHotBeverage: {
                    show: true,
                    lastSent: Date.now,
                    message: ""
                    // Sending a how beverage
                        // The sending user can press a prompt to send a hot beverage
                        // They can select between multiple options of coffee, tea, and hot chocolate
                        // The receiving user will receive a notification that their partner has sent them a hot drink
                        // The drink will appear with a small, bell-like jingle (?), then the drink will move to the top right and stay as an icon for about 3 hours
                },
                amazonWishlistDisplay: {
                    show: true,
                    lastSent: Date.now,
                    message: " "
                    // Amazon wishlist
                    // Amazon commission to link the wishlist
                        // This feature will not be considered MVP, BUT if possible, a link to the individual user's Amazon wishlist will be attached to their profile under the gift-giving love language
                        // The link will open the Amazon app to their user-specific wishlist
                }
            },
        // WORDS OF AFFIRMATION
            wordsOfAffirmation : {
                // send your thoughts
                // "thinking of you"
                // "you make me happy"
                // "you are brilliant"
                wordsOfAffirmationPrompt: {
                    show: true,
                    lastSent: Date.now,
                    message: " "
                    // Words of affirmation
                        // User1 can send their partner a pre-created message
                        // User1 can choose to include an icon to send with the message
                        // Voice message (?) will not be considered MVP but may be featured when all text-based messages are created
                }
            },
        // ACTS OF SERVICE
            actsOfService : {
                // can you help me with...?
                // I would appreciate if you...? ("...remind me to...")
                // Remind me to...
                // Don't forget to...
            },
        // QUALITY TIME
            qualityTime : {
                // want to watch a movie tonight?
                // can we have a Zoom date? Phone date?
                // Tell me about your day?
            }
        }
    }]
dateIdeas: {
    dinner: null
}

// Date night
    // Not included in MVP
    // A list of locations to meet
        // Includes:
            // Location
            // Date
            // Time
            // 3 activities to do together (user can generate more if need be, 3 is the minimum to enter a desired destination entry)

// Desired Destinations
    // Not included in MVP
    // A list of locations to meet
        // Includes:
            // Location
            // Date
            // Time
            // 3 activities to do together (user can generate more if need be, 3 is the minimum to enter a desired destination entry)

// User Script - think, feel, and do (What are they thinking, how will they feel, and what will they do?)
    // Walk through the users' actions and how app will play through that scenario

// MVP - minimal viable product
    // what features are MVP
    // what features are not MVP
    // potential in-app chat feature
    // chat may be outside MVP (https://socket.io/)

// virtual space - date night on the beach

// PWA - App extension, can be added to Android homepage, built into browser
    // How to build a PWA from scratch with HTML, CSS, and JavaScript
    // (https://www.freecodecamp.org/news/build-a-pwa-from-scratch-with-html-css-and-javascript/)

// React? React native?
    // Managing state (https://www.youtube.com/watch?v=2DV-bONIPqQ)

// Haptic feedback
    // Different vibrations for different actions?
        // holding hands is similar to a faster heartrate
        // hugging is similar to a deep breath
        // kisses - two quick vibrations ("Your partner has sent you a kiss *two quick vibrations")
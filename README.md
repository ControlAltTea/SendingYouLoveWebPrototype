# SendingYouLoveWebPrototype
COMPLETE: authentication
    - test creating a new user
    - check that sign up stores username, email, and password (password encrypted)
    - POST signup (user info goes to database >> login checks for user info)
    - GET signup (redirects to login>> if user is present, redirect to dashboard >> if user is not present, redirect to signup with flash message)

COMPLETE: Login.ejs
    - style the login.ejs

COMPLETE: signup.ejs

TODO: Index.ejs
    - create landing page gif
    - create mission statement
    - create splash for login and register (at the end of gif)
        - Eliminate redirect to /login and simply have "/" play a splash when the login button is pressed
        - splash includes login form and a "/signup" redirect

TODO: user profile
    - in PS, create user profile mockup
    - if user profile has not yet been created, prompt user to create profile, redirect to /create_profile
    - if user profile has already been created, do not prompt to create profile, redirect to /dashboard with appropriately populated user info ("Welcome, user!")
    - separate login model from user profile model

TODO: dashboard.ejs
    - create welcome message that recognizes user's profile
    - create partner profile section mockup
    - create love languages mockup section
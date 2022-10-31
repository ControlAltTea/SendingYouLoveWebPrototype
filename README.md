# SendingYouLoveWebPrototype
## TODO: /requests
### Create "/requests" page
### Received
    - If user has received a request, the sender's profile info will appear with an 'Accept' and 'Deny' button displayed
        - info will include name and pronouns of the sender
        
### Sent
    input field to enter an email
        - on Submit, check the if the email given can be found in the loginmodels
            - if not, request a valid email
            - (EXTRA) prompt user to send an email invite to the requested partner's email
                - Confirm email has been sent
                - Email can only be sent once as to avoid users spamming each other
        - Accepted
            - Accepted partners are stored in a Partners model (an array), and depending on the state of the slide, each partner's information will populate the
            partner's info section
        - Pending
            - This will simply say Pending with the requested emails underneath
            - even technically "rejected" requests will appear as pending, as to not agitate the sender
## TODO: React
    Refactor current layout in React
    Create components for the interactin buttons sections
    Create components for love language sections
        - Enable the love language sections to toggle using the "tab" (think dividers in a filing cabinet)
## TODO: Index.ejs
### create mission statement
    Something along the lines of "Sending You Love" is a "relationship supplement" app. The goal is to promote healthy communication between you and your partner(s).
### create landing page gif
    lol refine the gif...it's janky
### create splash for login and register (at the end of gif)
    Animate splash to ease it and out
    Eliminate redirect to /login and simply have "/" play a splash when the login button is pressed
    splash includes login form and a "/signup" redirect

## TODO: user profile
### in PS, create user profile mockup
### Create age-restriction disclaimer
    only users 18+ may use the app, and users will agree to only interact with users 18+
    
    COMPLETE: if user profile has not yet been created, prompt user to create profile, redirect to /create_profile
    COMPLETE: if user profile has already been created, do not prompt to create profile, redirect to /dashboard with appropriately populated user info ("Welcome,
    user!")

------------------
## COMPLETE: dashboard.ejs
    COMPLETE: create partner profile section mockup
    COMPLETE: create love languages mockup section
    COMPLETE: create welcome message that recognizes user's profile

## COMPLETE: authentication
    COMPLETE: test creating a new user
    COMPLETE: check that sign up stores username, email, and password (password encrypted)
    COMPLETE: POST signup (user info goes to database >> login checks for user info)
    COMPLETE: GET signup (redirects to login>> if user is present, redirect to dashboard >> if user is not present, redirect to signup with flash message)

## COMPLETE: Login.ejs
    COMPLETE: style the login.ejs

## COMPLETE: signup.ejs

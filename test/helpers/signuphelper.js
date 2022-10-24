exports.receivePronouns = function(req, res) {
    // takes the values from the signup form, splits the pronouns up
    // stores them in an array
    const pronounArr = req.userPronouns.split("/");

    // create a new object that we can later reference values from, inside our user object
    let reqBodyUser = {
        profile: {
            userProfileName: req.userProfileName,
            userPronouns: {
                subjective: "",
                objective: "",
                possessive: ""
            }
        }
    };

    // loop through the above object's profile.userPronouns object to dynamically change the values of the keys without refencing them directly
    // tense = subjective, objective, possessive
    // i sets the values of ^^^ as the object is looped through
    Object.keys(reqBodyUser.profile.userPronouns).forEach((tense, i = 0) => {
        reqBodyUser.profile.userPronouns[tense] = pronounArr[i];
        i++;
    })
    return reqBodyUser;
}
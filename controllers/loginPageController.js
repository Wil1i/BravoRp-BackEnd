const passport = require("passport")

const get = (req, res) => {
    res.render("loginPage")
}

const post = passport.authenticate("local", {
    failureFlash: true,
    failureRedirect: "/login",
    session: true
})

module.exports = {
    get,
    post
}
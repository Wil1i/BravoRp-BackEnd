const passport = require("passport")

const get = (req, res) => {
    res.render("loginPage")
}

const post = passport.authenticate("local", {
    failureFlash: true,
    failureRedirect: "/login",
    successRedirect: "/dashboard",
    session: true
})

module.exports = {
    get,
    post
}
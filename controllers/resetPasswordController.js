const get = (req, res) => {
    res.render("resetPasswordPage", {
        user: req.user
    })
}

module.exports = {
    get
}
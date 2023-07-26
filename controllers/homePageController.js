const get = (req, res) => {
    res.render("homePage", {
        user: req.user
    })
}

module.exports = {
    get
}
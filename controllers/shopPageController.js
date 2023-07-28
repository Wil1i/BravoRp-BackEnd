const get = (req, res) => {
    res.render("shopPage", {
        user: req.user
    })
}

module.exports = {
    get
}
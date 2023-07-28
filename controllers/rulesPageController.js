const get = (req, res) => {
    res.render("rulesPage", {
        user: req.user
    })
}

module.exports = {
    get
}
const get = (req, res) => {
    res.render("dashboardPage", {
        user: req.user
    })
}

module.exports = {
    get
}
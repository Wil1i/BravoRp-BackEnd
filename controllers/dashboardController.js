const get = (req, res) => {
    if (req.user.citizenId) {

    }

    res.render("dashboardPage", {
        user: req.user
    })
}

module.exports = {
    get
}
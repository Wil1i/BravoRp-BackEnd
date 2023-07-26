const User = require("../models/User")

const get = (req, res) => {
    res.render("registerPage")
}

const post = async (req, res) => {
    if (!req.body.username || !req.body.password || !req.body.email || !req.body.confirmpassword) return req.flash("error", "لطفا مقادیر مورد نظر را کامل کنید.")

    const isUsernameInUse = await User.findOne({ where: { username: req.body.username } })

    if (req.body.password != req.body.confirmpassword) {
        req.flash("error", "رمز عبور یکسان نمی باشد.")
        return res.redirect("/register")
    }

    if (isUsernameInUse) {
        req.flash("error", "نام کاربری مورد نظر از قبل ثبت شده است.")
        return res.redirect("/register")
    }

    await User.create({
        username: req.body.username,
        password: await User.encryptPassword(req.body.password)
    })

    res.redirect("/dashboard")
}

module.exports = {
    get,
    post
}
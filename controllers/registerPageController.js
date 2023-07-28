const User = require("../models/User")

const get = (req, res) => {
    res.render("registerPage", {
        user: req.user
    })
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
        password: await User.encryptPassword(req.body.password),
        code: Math.floor(1000 + Math.random() * (9999 - 1000 + 1))
    })

    res.redirect("/dashboard")
}

module.exports = {
    get,
    post
}
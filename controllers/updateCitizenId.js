const User = require("../models/User")

const post = async (req, res) => {
    if (!req.body.citizenId || !req.body.username) return res.json({ ok: false })

    const isUserAvailable = await User.findOne({ where: { username: req.body.username } })

    if (!isUserAvailable) return res.json({ ok: false })

    await isUserAvailable.update({ citizenId: req.body.citizenId })
}

module.exports = {
    post
}
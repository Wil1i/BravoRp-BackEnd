const User = require("../models/User")

const post = async (req, res) => {
    if (!req.body.citizenId || !req.body.username || !req.body.code) return res.json({ ok: false })

    const isUserAvailable = await User.findOne({ where: { username: req.body.username } })

    if (
        !isUserAvailable
        || isUserAvailable.code != req.body.code
        || isUserAvailable.verified
    ) return res.json({ ok: false })

    await isUserAvailable.update({ citizenId: req.body.citizenId, code: null, verified: true })
}

module.exports = {
    post
}
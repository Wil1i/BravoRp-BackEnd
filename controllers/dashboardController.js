const ServerPlayer = require("../models/ServerPlayer")
const axios = require("axios")

const get = async (req, res) => {
    let findPlayer;
    const players = await axios.get("http://127.0.0.1:30120/players.json")
    if (req.user.citizenId) {
        findPlayer = await ServerPlayer.findOne({where : {citizenId : req.user.citizenId}, include : ['permissions']})
    }
    
    res.render("dashboardPage", {
        user: req.user,
        player : findPlayer,
        players : players.data.length
    })
}

module.exports = {
    get
}
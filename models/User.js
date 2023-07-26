const { DataTypes } = require("sequelize")
const bcrypt = require("bcrypt")
const db = require("../configs/db")

const User = db.define("users", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    username: {
        type: DataTypes.TEXT
    },

    password: {
        type: DataTypes.TEXT
    },

    userRank: {
        type: DataTypes.TEXT,
        defaultValue: 'user'
    }
})

User.sync()

User.validPassword = (user, pwd) => {
    return bcrypt.compareSync(pwd, user.password)
}

User.encryptPassword = async (password) => {
    const saltRounds = 10
    const salt = await bcrypt.genSaltSync(saltRounds)
    const hash = await bcrypt.hashSync(password, salt)
    return hash
}

module.exports = User
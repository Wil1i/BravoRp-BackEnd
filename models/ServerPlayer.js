const serverDB = require("../configs/serverDB")
const { DataTypes } = require("sequelize")

const ServerPlayer = serverDB.define("players", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    citizenId: {
        type: DataTypes.TEXT
    },

    license: {
        type: DataTypes.TEXT
    },

    name: {
        type: DataTypes.TEXT
    },

    money: {
        type: DataTypes.TEXT
    },

    charinfo: {
        type: DataTypes.TEXT
    },

    job: {
        type: DataTypes.TEXT
    }
})

module.exports = ServerPlayer
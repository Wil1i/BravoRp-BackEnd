const serverDB = require("../configs/serverDB")
const { DataTypes } = require("sequelize")

const ServerPlayer = serverDB.define("permissions", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    name : {
        type : DataTypes.TEXT
    },

    license : {
        type : DataTypes.TEXT
    },

    permission : {
        type : DataTypes.TEXT
    },

    playerId : {
        type : DataTypes.INTEGER
    }
}, {
    timestamps : false
})

module.exports = ServerPlayer
const serverDB = require("../configs/serverDB")
const ServerPermission = require("./ServerPermission")
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
    },

    metadata: {
        type: DataTypes.TEXT
    }
}, {
    timestamps: false
})

ServerPlayer.hasMany(ServerPermission, { as: "permissions" })
ServerPermission.belongsTo(ServerPlayer, {
    foreignKey: 'playerId',
    as: 'permissions'
})

module.exports = ServerPlayer
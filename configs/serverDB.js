const sequelize = require("sequelize")
const config = require("./config.json")

const db = new sequelize(config.serverDataBase.name, config.serverDataBase.username, config.serverDataBase.password, {
    host: "localhost",
    dialect: "mysql"
})

try {
    db.authenticate()
    console.log(`Connected to server database`)
} catch (error) {
    console.log(`Error on connecting to server database`)
}

module.exports = db
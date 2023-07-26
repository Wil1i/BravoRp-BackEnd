const sequelize = require("sequelize")
const config = require("./config.json")

const db = new sequelize(config.database.name, config.database.username, config.database.password, {
    host: "localhost",
    dialect: "mysql"
})

try {
    db.authenticate()
    console.log(`Connected to database`)
} catch (error) {
    console.log(`Error on connecting to database`)
}

module.exports = db
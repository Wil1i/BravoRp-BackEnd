const express = require("express")
const bodyParser = require("body-parser")

const config = require("./configs/config.json")

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + "/public"))

app.set("views", __dirname + "/views")
app.set("view engine", "ejs")

const mainRoutes = require("./routes/index")
app.use("/", mainRoutes)

// Handle 404 page
app.get("*", (req, res) => {
    res.render("errorPage")
})

app.listen(config.app.port || 3000, () => {
    console.log(`App is running on port ${config.app.port || 3000}`)
})
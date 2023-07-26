let { Router } = require("express")
const { isNotLoggedIn, isLoggedIn } = require("../helpers/auth")

Router = new Router()

const loginPageController = require("../controllers/loginPageController")
Router.get("/login", isNotLoggedIn, loginPageController.get)
Router.post("/login", loginPageController.post)

const registerPageController = require("../controllers/registerPageController")
Router.get("/register", isNotLoggedIn, registerPageController.get)
Router.post("/register", isNotLoggedIn, registerPageController.post)

const resetPasswordPageController = require("../controllers/resetPasswordController")
Router.get("/reset", resetPasswordPageController.get)

const updateCitizenIdController = require("../controllers/updateCitizenId")
Router.post("/citizen", updateCitizenIdController.post)

const rulesPageController = require("../controllers/rulesPageController")
Router.get("/rules", rulesPageController.get)

const shopPageController = require("../controllers/shopPageController")
Router.get("/shop", shopPageController.get)

const dashboardPageController = require("../controllers/dashboardController")
Router.get("/dashboard", isLoggedIn, dashboardPageController.get)

const homePageController = require("../controllers/homePageController")
Router.get("/", homePageController.get)

module.exports = Router
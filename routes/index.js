let { Router } = require("express")
Router = new Router()

const loginPageController = require("../controllers/loginPageController")
Router.get("/login", loginPageController.get)

const registerPageController = require("../controllers/registerPageController")
Router.get("/register", registerPageController.get)

const resetPasswordPageController = require("../controllers/resetPasswordController")
Router.get("/reset", resetPasswordPageController.get)

const rulesPageController = require("../controllers/rulesPageController")
Router.get("/rules", rulesPageController.get)

const shopPageController = require("../controllers/shopPageController")
Router.get("/shop", shopPageController.get)

const homePageController = require("../controllers/homePageController")
Router.get("/", homePageController.get)

module.exports = Router
const express = require("express")

const route = express.Router()

const LoginController = require("../controllers/LoginController")
route.post("/", LoginController.login)
 
module.exports = route
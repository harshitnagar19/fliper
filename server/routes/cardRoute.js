const express = require("express")
const route = express.Router()

const cardController = require("../controllers/cardController")
route.post("/",cardController.add)
route.post("/getcards",cardController.getcards)

module.exports = route

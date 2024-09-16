const express = require('express')
const route = express.Router();

const SusrcibeController = require("../controllers/SusrcibeController")
route.post("/",SusrcibeController.suscribe)
route.post("/getallsuscribe",SusrcibeController.getAllsuscribe)

module.exports = route;
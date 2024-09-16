const express = require('express')
var bodyParser = require('body-parser')
var cors = require("cors");

const app = express()
app.use(cors())

require('./db/db')

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
 
const SuscribeRoute = require("../server/routes/SuscribeRoute")
app.use("/suscribe",SuscribeRoute)

const LoginRoute = require("./routes/LoginRoute")
app.use("/login",LoginRoute)

app.listen(9999, ()=>{
    console.log("server is running on port : ", 9999)
  }); 
const mongoose = require("mongoose")

const { Schema } = mongoose;

const suscribeSchema = new Schema({
    "email":{
       type: String,
       required:true
    }
})


const Suscribe = mongoose.model("Suscribe", suscribeSchema);
module.exports = Suscribe
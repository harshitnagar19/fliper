const mongoose = require("mongoose")

const { Schema } = mongoose;

const CardSchema = new Schema({
    
    "addedBy" :{
        type : mongoose.Types.ObjectId,
        required:true
    },
    "tag": {
        type: [String],
        required: true,
    },
    "image" : {
        type:String,
        required: true
    },
    "title" : {
        type: String,
        required : true
    },
    "location": {  
        type: String, 
        required: true,
    },
    "description": {
        type: String,
        required: true,
    },
    "totalprice": {
        type : Number,
        required: true
    },
    "getprice": {
        type: Number,
        required: true,
    },
    "securitytype": {
        type: String,
        required: true,
    },
    "investmentmultiple": {
        type: String,
        required: true, 
    },
    "maturity": {
        type: String,
        required: true,
    },
    "mininvestment":{
        type:Number,
        reuired:true
    }
})


const Cards = mongoose.model("Cards",CardSchema )

module.exports = Cards
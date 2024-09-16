const Cards = require("../models/cards")
const mongoose = require("mongoose")
let cardService = {}

cardService.add = async(addedBy, tag, image, title, location, description, totalprice, getprice, securitytype, investmentmultiple, maturity, mininvestment )=>{

    try{
        console.log("addedBy",addedBy)
        const objectId = new mongoose.Types.ObjectId(addedBy);
        const card = await Cards.create({addedBy:objectId, tag, image, title, location, description, totalprice, getprice, securitytype, investmentmultiple, maturity, mininvestment });
        return({
            status:"ok",
            msg:"data entered",
            data:[card]
        })
    }catch(err){
        return({
            status:"err",
            msg:"error at backend to add card",
            data:[err.message]
        })
    }
}

cardServices.getcards = async()=>{
    try{
        let result = await Cards.find()
        return ({
            status:"ok",
            msg:"fonded cards",
            data:result
        })
    }catch(err){
        return ({
        status:"err",
        msg:"backend error to get cards",
        data:[]
    })
    }
}
module.exports  = cardService
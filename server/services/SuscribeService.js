const Suscribe = require("../models/Suscribe")

const suscribeService= {}

suscribeService.add = async(email)=>{
    try{
       let alreadySuscribe = await Suscribe.findOne({"email":email});
       if(alreadySuscribe){
        return {
            status:"ERR",
            msg:"alreadySuscribe",
            data:["alreadySuscribe"]
        }
       }else{
        let data = await Suscribe.create({"email":email})
        return {
            status:"OK",
            msg:"suscribe sucesfully",
            data:[data]
        }
       }

    }catch(e){
        return {
            status:"ERR",
            msg:"something went wrong in backend suscribeServie",
            data:[e.message]
        }
    }
}

module.exports = suscribeService
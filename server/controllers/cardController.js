const jwt = require("jsonwebtoken")
const SECRET_KEY = "hehehehe" 
const joi = require('joi');
const cardService = require("../services/cardService");
const cardController = {}

const schema = joi.object({
    addedBy:joi.required(),
    tag: joi.required(),
    image:joi.string().required(),
    title:joi.string().required(),
    location:joi.string().required(),
    description:joi.string().required(), 
    totalprice:joi.number().required(),
    getprice:joi.number().required(), 
    securitytype:joi.string().required(),
    investmentmultiple:joi.string().required(), 
    maturity:joi.string().required(), 
    mininvestment:joi.number().required()
})

cardController.add = async(req,res)=>{
    let { tag, image, title, location, description, totalprice, getprice, securitytype, investmentmultiple, maturity, mininvestment } = req.body
    const { authorization } = req.headers;
    try{
        const {_id} = jwt.verify(authorization, SECRET_KEY);
        try{
            await schema.validateAsync({ addedBy:_id, tag, image, title, location, description, totalprice, getprice, securitytype, investmentmultiple, maturity, mininvestment });
            const result = await cardService.add(_id, tag, image, title, location, description, totalprice, getprice, securitytype, investmentmultiple, maturity, mininvestment)
            res.send(result)
        }catch(err){
            res.send({
                status: "err",
                msg: `invalid inputs ${err.message}`,
                data: [],
            })
        }
        
    }
    catch(err){
        res.send({
            status: "err",
            msg: "error while verifying the admin",
            data: []
          })
    }

}

cardController.getcards = async (req,res)=>{
   let result =  await cardService.getcards()
   res.send(result)
}

module.exports = cardController
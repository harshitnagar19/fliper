const joi = require('joi');
const SuscribeService = require("../services/SuscribeService")
const SuscribeController = {}

const schema = joi.object({
    email: joi.string().email().required()
})
SuscribeController.suscribe = async (req, res) => {
    const { email } = req.body;
    try {
        await schema.validateAsync({ email });
       let result = await SuscribeService.add(email)
        res.send(result)
    } catch (e) {
        res.send({
            status: "ERR",
            msg: "bad request for suscribe",
            data: [e.message],
        })
    }


}
SuscribeController.getAllsuscribe = async(req,res)=>{
    let result =  await SuscribeService.getAllsuscribe()
   res.send(result)
}
module.exports = SuscribeController
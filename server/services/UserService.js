const User = require("../models/User")

const UserService = {}

UserService.findUserWithEmail = async (email) => {
        try{
           return  await User.findOne({ email })
        }catch(err){
            return null
        }

}

module.exports = UserService
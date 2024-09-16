const User = require("../models/User")

const UserService = {}

UserService.findUserWithEmail = async (email) => {
    return (await User.findOne({ email }))
}

module.exports = UserService
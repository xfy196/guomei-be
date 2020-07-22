const { User } = require("../utils/db");
const { use } = require("../router/userRouter");

const signup = async (data) => {
    console.log(data);
    let result = await new User(data).save();
    return result;
}
const findUserByUsername = async (username) => {
    let result = await User.findOne({ $or: [{ email: username }, { phone: username }] });
    return result;
}

const findList = async () => {
    let result = await User.find();
    return result;
}

module.exports = {
    signup,
    findUserByUsername,
    findList
}
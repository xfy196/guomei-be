const { User } = require("../utils/db");
const { use } = require("../router/userRouter");

const signup = async (data) => {
    let result = await new User(data).save();
    return result;
}
const findUser = async (username) => {
    let result = await User.findOne({ $or: [{ email: username }, { phone: username }] });
    return result;
}


module.exports = {
    signup,
    findUser,
}
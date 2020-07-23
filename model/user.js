const { User } = require("../utils/db");
const { use } = require("../router/userRouter");

const signup = async (data) => {
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

const update = async (user) => {
    let result = await User.updateOne({_id : user._id}, user);
    return result;
}
const deleteById = async (id) => {
    return await User.findByIdAndDelete({_id: id});
}
const deleteByPhone = async (phone) => {
    return await User.findOneAndDelete({phone})
}
module.exports = {
    signup,
    findUserByUsername,
    findList,
    update,
    deleteById,
    deleteByPhone
}
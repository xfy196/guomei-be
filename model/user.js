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

const update = async (user) => {
    return await User.update(user)
}
const deleteById = async (id) => {
    return await User.findByIdAndDelete({_id: id});
}
module.exports = {
    signup,
    findUserByUsername,
    findList,
    update,
    deleteById
}
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/ikea", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// 定义用户的数据模型
const User = mongoose.model("user", {
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        require: true
    }
});

module.exports = {
    User
}
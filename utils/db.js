const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/guomei", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// 定义用户的数据模型
const User = mongoose.model("user", {
    username : {
        type : String,
        required : true
    },
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
    },
    created : {
        type: Date,
        required : true
    },
    updated : {
        type : Date,
        required : true
    }
});

module.exports = {
    User
}
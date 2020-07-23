const mongoose = require("mongoose");
const {ObjectId} = mongoose.SchemaTypes
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
const Product = mongoose.model("product",{
    cid : {
        type : ObjectId,
    },
    productImgURL : {
        type : String,
        required : true
    },
    shopId : {
        type : String,
        required : true
    },
    shopName : {
        type : String,
        required : true
    },
    shopImgUrl: {
        type : String,
    },
    shopLogoUrl: {
        type : String,
        required : true
    },
    price : {
        type : String,
        required : true
    },
    markingPrice : {
        type : String,
    }
})

module.exports = {
    User,
    Product
}
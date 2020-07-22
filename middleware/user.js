/**
 * 用户登录拦截防止用户使用接口请求的方式去登陆后端
 */
const {verify} = require("../utils/token.js"); 
module.exports = async (ctx, next) => {
    // 我们需要拿到请求头中的x-access-token
    let token = ctx.req.headers["x-access-token"];
    let result = await verify(token)
    // 如果有结果验证成功
    if(result){
        // 放行
        next();
    }else{
        // 否则验证失败
        ctx.body = JSON.stringify({
            code : -1,
            msg : "没有操作权限"
        })
    }
}
const user = require('../model/user');
const md5 = require("md5");


/**
 * @api {post} /user/signup
 * @apiName signup
 * @apiGroup User
 *
 * @apiParam {String} email 用户的邮箱
 * @apiParam {String} phone 用户的手机号码
 * @apiParam {String} password 用户的密码
 * @apiParam {String} VCode 手机验证码  功能暂未实现
 *
 * @apiSuccess {Number} code 成功标识符
 * @apiSuccess {String} msg 成功信息提示
 */
const signup = async (ctx, next) => {
    let userInfo = ctx.request.body;
    if(await user.findUser(userInfo.email)){
        ctx.body = JSON.stringify({
            code: -1,
            msg: "该用户已注册",
        });
        return;
    }
    // 先验证该用户是否已存在
    userInfo.password = md5(userInfo.password);
    // 调用user接口
    let result = await user.signup(userInfo.username);

    if (result) {
        ctx.body = JSON.stringify({
            code: 0,
            msg: "注册成功",
        })
    }else {
        ctx.body = JSON.stringify({
            code : -1,
            msg : "注册失败"
        })
    }
    await next();
}

/**
 * @api {post} /user/login
 * @apiName login
 * @apiGroup User
 *
 * @apiParam {String} username 登录的用户名
 * @apiParam {String} password 登录的密码
 *
 * @apiSuccess {String} nickname 用户的昵称
 * @apiSuccess {String} email 用户的邮箱
 * @apiSuccess {String} phone 用户的手机号码
 */
const login = async (ctx, next) => {
    let userInfo = ctx.request.body;
    let result = await user.findUser(userInfo.username);
    if(result && result.password === md5(userInfo.password)){
        ctx.body = JSON.stringify({
            code : 0,
            msg : "登录成功",
            data : {
                email : result.email,
                phone : result.phone,
                nickname : result.phone
            }
        })
    }else {
        ctx.body = JSON.stringify({
            code : -1,
            msg : "密码错误",
        })
    }
}

/**
 * @api {post} /user/checkUser
 * @apiName checkUser
 * @apiGroup User
 *
 * @apiParam {String} username 登录的用户名
 *
 * @apiSuccess {String} username 上一次登录验证的登录名
 */
const checkUser = async (ctx, next) => {
    let userInfo = ctx.request.body;
    let result = await user.findUser(userInfo.username);
    if(result){
        ctx.body = JSON.stringify({
            code : 0,
            msg : "存在该用户",
            data : {
                username : userInfo.username
            }
        })
    }else {
        ctx.body = JSON.stringify({
            code : -1,
            msg : "不存在该用户"
        })
    }
}

module.exports = {
    signup,
    login, 
    checkUser
}
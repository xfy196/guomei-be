const user = require('../model/user');
const md5 = require("md5");
const { sign } = require("../utils/token")

/**
 * @api {post} /user/signup
 * @apiName signup
 * @apiGroup User
 *
 * @apiParam {String} email 用户的邮箱
 * @apiParam {String} phone 用户的手机号码
 * @apiParam {String} password 用户的密码
 * @apiParam {String} VCode 手机验证码  功能暂未实现
 * @apiParam {String} username 第一次按规则生成的用户名
 * @apiParam {Date} created 注册日期
 *
 * @apiSuccess {Number} code 成功标识符
 * @apiSuccess {String} msg 成功信息提示
 */
const signup = async (ctx, next) => {
    let userInfo = ctx.request.body;
    if (await user.findUser(userInfo.phone)) {
        ctx.body = JSON.stringify({
            code: -1,
            msg: "该用户已注册",
        });
        return;
    }
    // 先验证该用户是否已存在
    userInfo.password = md5(userInfo.password);
    // 以上验证成功之后我们就可以设置随机的用户名了
    userInfo.username = "qf_" + userInfo.phone.replace(/^(\d{3})\d{4}(\d{4})$/, "$1^-^$2") + "qfzs";
    userInfo.created = new Date();
    userInfo.updated = new Date();
    // 调用user接口
    let result = await user.signup(userInfo);

    if (result) {
        ctx.body = JSON.stringify({
            code: 0,
            msg: "注册成功",
        })
    } else {
        ctx.body = JSON.stringify({
            code: -1,
            msg: "注册失败"
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
 * @apiSuccess {String} username 用户的昵称
 * @apiSuccess {String} email 用户的邮箱
 * @apiSuccess {String} phone 用户的手机号码
 */
const login = async (ctx, next) => {
    let userInfo = ctx.request.body;
    let result = await user.findUserByUsername(userInfo.username);
    // 登陆成功
    if (result && result.password === md5(userInfo.password)) {
        // TODO jwt加密验证
        let token = sign(result.username);
        ctx.body = JSON.stringify({
            code: 0,
            msg: "登录成功",
            data: {
                email: result.email,
                phone: result.phone,
                username: result.username
            }
        })
    } else {
        ctx.body = JSON.stringify({
            code: -1,
            msg: "密码错误",
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
    let result = await user.findUserByUsername(userInfo.username);
    if (result) {
        ctx.body = JSON.stringify({
            code: 0,
            msg: "存在该用户",
            data: {
                username: userInfo.username
            }
        })
    } else {
        ctx.body = JSON.stringify({
            code: -1,
            msg: "不存在该用户"
        })
    }
}

/**
 * @api {post} /user/userList
 * @apiName userList
 * @apiGroup User
 * 
 * @apiSuccess {Array} list 返回用户列表 上一次登录验证的登录名
 */
const userList = async (ctx, next) => {

    let result = await user.findList();
    if (result) {

        ctx.body = JSON.stringify({
            code: 0,
            list: result
        })
    } else {
        ctx.body = JSON.stringify({
            code: -1,
            msg: "没有数据",
            list : []
        }
        )
    }
}

/**
 * @api {post} /user/userUpdate
 * @apiName userUpdate
 * @apiGroup User
 * 
 * @apiParam {String} username 修改的用户名
 * @apiParam {String} password 修改的密码
 * @apiParam {String} phone 修改的手机号码
 * @apiParam {String} email 修改的email
 * 
 * @apiSuccess {Number} code 成功标识符
 * @apiSuccess {String} msg 成功信息提示
 */
const userUpdate = async (ctx, next) => {
    let userInfo = ctx.request.body;
    userInfo.updated = new Date();
    userInfo.username = "qf_" + userInfo.phone.replace(/^(\d{3})\d{4}(\d{4})$/, "$1^-^$2") + "qfzs";
    let result = user.update(userInfo);
    if (result) {
        ctx.body = JSON.stringify({
            code : 0,
            msg : "更新成功",
        })
    }else {
        ctx.body = JSON.stringify({
            code : -1, 
            msg : "更新失败"
        })
    }
}

/**
 * @api {post} /user/userDeleteById
 * @apiName userUpdate
 * @apiGroup User
 * 
 * @apiParam {String} _id 用户在数据库的唯一标识
 * 
 * @apiSuccess {Number} code 成功标识符
 * @apiSuccess {String} msg 成功信息提示
 */
const userDeleteById = async (ctx, next) => {
    let result = await user.deleteById(ctx.request.body._id);
    if(result){
        ctx.body = JSON.stringify({
            code : 0,
            msg : "删除成功"
        })
    }else {
        ctx.body = JSON.stringify({
            code : -1,
            msg : "删除失败"
        })
    }
}
module.exports = {
    signup,
    login,
    checkUser,
    userList,
    userUpdate,
    userDeleteById
}
const fs = require("fs")
const path = require("path");
const jwt = require("jsonwebtoken")
exports.sign = (payload) => {
    let privateKey = fs.readFileSync(path.resolve(__dirname, "../keys/rsa_private_key.pem"));
    let token = jwt.sign(payload, privateKey, { algorithm: "RS256" });
    return token;
}

/**
 * 解密
 * @param {*} token 加密的字符串
 */
exports.verify = (token) => {
    let cert = fs.readFileSync(path.resolve(__dirname, "../keys/rsa_public_key.pem"));
    return new Promise(resolve => {
        jwt.verify(token, cert, (err, decoded) => {
            resolve(decoded);
        })
    })
}
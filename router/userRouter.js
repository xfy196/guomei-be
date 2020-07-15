const Router = require("koa-router");
const router = new Router();
const userController = require("../controller/userController");

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.post("/checkUser", userController.checkUser);

module.exports = router
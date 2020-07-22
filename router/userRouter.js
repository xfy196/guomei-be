const Router = require("koa-router");
const router = new Router();
const userController = require("../controller/userController");

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.post("/checkUser", userController.checkUser);
router.get("/userList", userController.userList);
router.post("/userUpdate", userController.userUpdate);
router.post("/userDeleteById", userController.userDeleteById);

module.exports = router
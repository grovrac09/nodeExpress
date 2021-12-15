const {Router} = require("express");
const {addUser, listUser, updateUser, deleteUser} = require("./userController");
const {hashPassword, checkPassword, checkEmail} = require("../middleware");
const userRouter = Router();

userRouter.post("/user", checkEmail, hashPassword, addUser);
userRouter.get("/userCheck", checkPassword);
userRouter.get("/user", listUser);
userRouter.put("/user", updateUser);
userRouter.delete("/user", deleteUser);

module.exports = userRouter;



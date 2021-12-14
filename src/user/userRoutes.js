const {Router} = require("express");
const {addUser, listUser, updateUser, deleteUser} = require("./userController");
const {hashPassword} = require("../middleware");
const userRouter = Router();

userRouter.post("/user", hashPassword, addUser);
userRouter.get("/user", listUser);
userRouter.put("/user", updateUser);
// userRouter.delete("/user", deleteUser);

module.exports = userRouter;
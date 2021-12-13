const {Router} = require("express");
const {addUser, listUser, updateUser, deleteUser} = require("./userController");
const userRouter = Router();

userRouter.post("/user", addUser);
userRouter.get("/user", listUser);
// userRouter.put("/user", updateUser);
// userRouter.delete("/user", deleteUser);

module.exports = userRouter;
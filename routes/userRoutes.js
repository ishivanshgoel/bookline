const express = require("express");
const userRouter = express.Router();
const { createNewUserAccountController, 
    createStudentDetailsController } 
    = require("../controllers/userController");

userRouter.get("/", (req, res, next) => {
    res.json("OK")
});

userRouter.post("/account", (req, res, next) => createNewUserAccountController(req, res, next));
userRouter.post("/studentdetail", (req, res, next) => createStudentDetailsController(req, res, next));

module.exports = userRouter;
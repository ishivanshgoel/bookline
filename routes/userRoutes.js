const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userController");

userRouter.get("/", async (req, res, next) => {
    res.json("OK")
});

module.exports = userRouter;
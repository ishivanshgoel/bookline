const express = require("express");
const classRouter = express.Router();
const classController = require("../controllers/classController");

classRouter.get("/", async (req, res, next) => {
    res.json("OK")
});

module.exports = classRouter;
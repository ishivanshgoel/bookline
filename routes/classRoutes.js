const express = require("express");
const classRouter = express.Router();
const { createNewClassController, 
    getStudentScoreInClassForSubjectController } 
    = require("../controllers/classController");

classRouter.get("/", (req, res, next) => {
    res.json("OK")
});

classRouter.post("/new", (req, res, next) => createNewClassController(req, res, next));
classRouter.get("/studentsmarks", (req, res, next) => getStudentScoreInClassForSubjectController(req, res, next));

module.exports = classRouter;
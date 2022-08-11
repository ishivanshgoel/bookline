const { 
    getStudentScoreInClassForSubjectService,  
    createClassDetailService 
} = require("../services/classService");

async function createNewClassController(req, res) {
    try{
        const { className, year, classTeacher, subjectList, students } = req.body;
        let newClassDetailResponse = await createClassDetailService(className, year, classTeacher, subjectList, students)
        return res.json({
            message: "success",
            response: newClassDetailResponse
        })
    } catch(err) {
        res.json({
            message: "error",
            detail: err.message
        })
    }
}

async function getStudentScoreInClassForSubjectController(req, res) {
    try {
        const { className, subjectName } = req.query;
        let response = await getStudentScoreInClassForSubjectService(className, subjectName)
        return res.json({
            message: "success",
            response: response
        })
    } catch(err) {
        return res.json({
            message: "error",
            detail: err.message
        })
    }
}

module.exports = { createNewClassController, getStudentScoreInClassForSubjectController }
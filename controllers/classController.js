const { 
    getStudentScoreInClassForSubjectService,  
    createClassDetailService 
} = require("../services/classService");

async function createNewClass(req, res) {
    try{
        const { className, year, classTeacher, subjectList, students } = req.body;
        let newClassDetailResponse = await createClassDetailService(className, year, classTeacher, subjectList, students)
        return res.json(newClassDetailResponse)
    } catch(err) {
        res.json({
            message: "error",
            detail: err.message
        })
    }
}

async function getStudentScoreInClassForSubject(req, res) {
    try {
        const { className, subjectName } = req.body;
        let response = getStudentScoreInClassForSubjectService(className, subjectName)
        return res.json(response)
    } catch(err) {
        res.json({
            message: "error",
            detail: err.message
        })
    }
}

module.exports = { createNewClass, getStudentScoreInClassForSubject }
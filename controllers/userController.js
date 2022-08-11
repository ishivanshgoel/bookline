const { createUserAccountService, createStudentDetailsService } = require("../services/userService");

async function createNewUserAccountController(req, res, next) {
    try {
        const { userId, password } = req.body;
        let response = await createUserAccountService(userId, password);
        return res.json({
            message: "success",
            response: {
                userId: response["userId"]
            }
        })
    } catch(err) {
        return res.json({
            message: "error",
            detail: err.message
        })
    }
}

async function createStudentDetailsController(req, res, next) {
    try {
        const { userId, studentId, name, dob } = req.body;
        let response =  await createStudentDetailsService(userId, studentId, name, dob);
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

module.exports = { createNewUserAccountController, createStudentDetailsController }
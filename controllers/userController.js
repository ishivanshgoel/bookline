const { createUserAccountService, createStudentDetailsService } = require("../services/userService");

async function createNewUserAccount(req, res) {
    try {
        const { userId, password } = req.body;
        let response = await createUserAccountService(userId, password);
        return res.json(response)
    } catch(err) {
        return res.json({
            message: "error",
            detail: err.message
        })
    }
}

async function createStudentDetails(req, res) {
    try {
        const { userId, studentId, name, dob } = req.body;
        let response =  await createStudentDetailsService(userId, studentId, name, dob);
        return res.json(response)
    } catch(err) {
        return res.json({
            message: "error",
            detail: err.message
        })
    }
}

module.exports = { createNewUserAccount, createStudentDetails }
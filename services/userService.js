const UserAccount = require("../models/userAccount");
const StudentDetail = require("../models/studentDetail");
const bcrypt = require("bcrypt");

async function createUserAccountService(userId, password) {

    // #region validations
    if(userId == null || userId.length == 0) {
        throw new Error(`User Id is required`);
    }

    if(password == null || password.length == 0) {
        throw new Error(`Password is required`);
    }

    let isExisiting = await UserAccount.findOne({ userId: userId }).exec();
    if(isExisiting) {
        throw new Error(`User Id: ${userId} already registered`);
    }
    // #endregion validations

    // encrypt password
    const salt = await bcrypt.genSalt(10)
    const encryptedPassword = await bcrypt.hash(password, salt)

    let userAccount = new UserAccount({
        userId: userId,
        password: encryptedPassword,
        lastUpdated: new Date() // at the time of login just check if the password is updated before 30 days, then ask user to change it
    });

    userAccount.save();
    return userAccount;
}

async function createStudentDetailsService(userId, studentId, name, dob) {
    // #region validations
    if(userId == null || userId.length == 0) {
        throw new Error(`User Id is required`);
    }

    if(studentId == null || studentId.length == 0) {
        throw new Error(`Student Id is required`);
    }

    if(name == null || name.length == 0) {
        throw new Error(`Name is required`);
    }

    let isExisitingUserId = await StudentDetail.findOne({ userId: userId }).exec();
    if(isExisitingUserId) {
        throw new Error(`User Id: ${userId} already registered`);
    }
    let isExisitingStudentId = await StudentDetail.findOne({ studentId: studentId }).exec();
    if(isExisitingStudentId) {
        throw new Error(`Student Id: ${studentId} already registered`);
    }
    
    // #endregion validations

    let studentDetail = new StudentDetail({
        userId: userId,
        studentId: studentId,
        name: name,
        dob: dob
    });

    await studentDetail.save();
    return studentDetail;
}

module.exports = { createUserAccountService, createStudentDetailsService }
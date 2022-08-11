const ClassDetail = require("../models/classDetail");
const StudentMarks = require("../models/studentMarks");

async function createClassDetailService(className, year, classTeacher, subjectList, students) {

    //# region data_validations

    if(className == null || className.length == 0) {
        throw new Error(`Class Name is required`);
    }

    // className should be unique
    const isExisting = await ClassDetail.findOne({
        className: className
    }).exec();
    if(isExisting) {
        throw new Error(`Class: ${className} already exisits`);
    }

    if(!Number.isInteger(year) && year <= new Date().getFullYear()) {
        throw new Error(`Year: ${year} is Invalid`);
    }

    if(classTeacher == null || classTeacher.length == 0) {
        throw new Error(`Subject Teacher name not found`);
    }

    if(subjectList.length == 0) {
        throw new Error(`Subjects List cannot be empty.`);
    }

    // available subjects set
    // this will reject the duplicate subject names
    // also, it will be used to check that students opt some subject
    // from the available subjects list only
    let availableSubjectListSet = new Set(subjectList);
    // #endregion data_validations

    let newClassDetail = new ClassDetail({
        className: className,
        year: year,
        classTeacher: classTeacher,
        subjectList: Array.from(availableSubjectListSet)
    })

    if(await createStudentsMarkDetailService(availableSubjectListSet, students, className) == true) {
        newClassDetail.save();
    }

    return true;
}

async function createStudentsMarkDetailService(availableSubjectListSet, students, className) {

    // #region data_validation
    let rollNumbers = Object.keys(students)
    rollNumbers.forEach((rn) => {
        let marksObject = students[rn]["marks"];
        let studentSubjects = Object.keys(marksObject);
        

        // subject should be there in availableSubjectList
        if(!studentSubjects.every((subject) => {
            return availableSubjectListSet.has(subject)
        })) {
            throw new Error(`Invalid subject opted by student`)
        }
    })
    // #endregion data_validation

    rollNumbers.forEach((rn) => {
        let studentId = students[rn]["studentId"];
        let marksObject = students[rn]["marks"];
        let studentSubjects = Object.keys(marksObject);
        if(studentSubjects.length == 0 || studentSubjects.length > 6) {
            throw new Error("Student subjects length should be between 1 to 6");
        }

        // subject should be there in availableSubjectList
        studentSubjects.every(async (subjectName) => {
            let newMarkDetail = new StudentMarks({
                studentId: studentId,
                subjectName: subjectName,
                marks: marksObject[subjectName],
                className: className
            })
            newMarkDetail.save();
        })
    })

    return true;
}

async function getStudentScoreInClassForSubjectService(className, subjectName) {

    if(className == null || className.length == 0) {
        throw new Error(`Class Name is required`);
    }

    if(subjectName == null || subjectName.length == 0) {
        throw new Error(`Subject Name is required`);
    }

    return await StudentMarks.find({
        className: className,
        subjectName: subjectName
    }).exec();
}

module.exports = { 
    getStudentScoreInClassForSubjectService, 
    createClassDetailService
}
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentMarksSchema = new Schema({
  studentId: { type: String, required: true },
  subjectName: { type: String, required: true },
  marks: { type: Number, required: true },
  className: { type: String, required: true }
});

module.exports = mongoose.model("StudentMarks", studentMarksSchema);
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentDetailSchema = new Schema({
  className: { type: String, required: true, unique: true },
  year: { type: Number, required: true },
  classTeacher: { type: String, required: true },
  subjectList: { type: [String], require: true }
}); 

module.exports = mongoose.model("ClassDetail", studentDetailSchema);
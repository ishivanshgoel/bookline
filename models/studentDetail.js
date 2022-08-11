const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentDetailSchema = new Schema({
  studentId: { type: String, required: true, unique: true }, //userId from userAccount
  rollNumber: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  dob: { type: Date, require: true },
});

module.exports = mongoose.model("StudentDetail", studentDetailSchema);
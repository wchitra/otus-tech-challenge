const mongoose = require('mongoose');

const schemaOptions = {
  toObject: {
    virtuals: true

  }, toJSON: {
    virtuals: true
  }
};

const StudentSchema = new mongoose.Schema({
  first: String,
  last: String,
  studentClasses: [{}]
}, schemaOptions);

StudentSchema.virtual('gpa').get(function () {
  const sum = this.studentClasses.reduce((a, b) => a + b.grade, 0);
  const length = this.studentClasses.length;
  const gradePointAverage = sum / length;
  return gradePointAverage.toFixed(2);;
});

module.exports = mongoose.model('Student', StudentSchema);

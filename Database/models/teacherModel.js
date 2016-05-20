var mongoose = require('mongoose')

var teacherSchema = new mongoose.Schema ({
  firstName: {type: String, required: true},
  lastName:{type: String, required: true},
  userName: {type: String, required: true},
  subject: {type: String},
  grade: {type: Number},
  studentByClass: {type: {}},
  favorites: {type:[]},
  created: {type: Date, Default: Date.now}
});

var Teacher = mongoose.model('teacher', teacherSchema);
module.exports = mongoose.model('Teacher', teacherSchema, 'teachers');

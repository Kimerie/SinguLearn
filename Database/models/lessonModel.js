var mongoose = require('mongoose')

var lessonSchema = new mongoose.Schema ({
  lessonName: {type: String, unique: true, required: true},
  lessonType: {type: String, required: true},
  subject:{type: String, required: true},
  grade: {type: Number},
  questions: {name: String, type:[]},
  answers: {name: String, type:[]},
  created:{type: Date, Default: Date.now}
});

var Lesson = mongoose.model('lesson', lessonSchema);
module.exports = mongoose.model('Lesson', lessonSchema, 'lessons');

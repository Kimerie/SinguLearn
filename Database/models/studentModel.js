var mongoose = require('mongoose')

var studentSchema = new mongoose.Schema ({
  firstName: {type: String, required: true},
  lastName:{type: String, required: true},
  userName: {type: String, required: true},
  performance: {type: String},
  completedLessons: {name: String, type:[]},
  currentPlaylist: {name: String, type:[]},
  created: {type: Date, Default: Date.now},
  teacher:{type:String},
  period:{type:String},
  parentOrCaregiver: {
    mother: {type: String},
    motherPhone: {type: String},
    father: { type: String},
    fatherPhone: {type: String},
    caregiver: {type:String},
    caregiverPhone: {type: String},
  }
});

var Student = mongoose.model('student', studentSchema);
module.exports = mongoose.model('Student', studentSchema, 'students');

var Teacher = require('../models/teacherModel.js');

exports.saveNewTeacher = function(userInput, callback){
  var newTeacher = new Teacher;
  newTeacher.firstName        = userInput.firstName;
  newTeacher.lastName         = userInput.lastName;
  newTeacher.userName         = userInput.firstName + userInput.lastName;
  newTeacher.subject          = userInput.subject;
  newTeacher.grade            = userInput.grade;
  // newTeacher.studentByClass   = {};
  // newTeacher.favorites        = [];
  newTeacher.created          = Date.now();



  newTeacher.save(function(err, data) {
    if(err) {
      console.log("Error. Entry not saved")
      return err
    } else {
      console.log("Post saved!", data)
    }
  });
  callback(null, newTeacher);
};

// Given the name of a student, retrieve their record from the database
exports.getTeacherByuserName = function (userName, callback) {
  Teacher.findOne({'userName': userName}, function (err, teacher) {
    //console.log("line 47", student);
    if (err) {
      console.log(err);
    }
    callback(null, teacher);
  });
};

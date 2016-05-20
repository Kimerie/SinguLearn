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

exports.updateTeacherRecord = function (firstName, lastname, userInput, callback) {
  var query = {'firstName': firstName, 'lastName': lastName };
  Teacher.findOneAndUpdate(query, userInput, function (err, teacher) {
    if (err) {
      console.log(err);
    }
    callback(null, teacher);
  });

}

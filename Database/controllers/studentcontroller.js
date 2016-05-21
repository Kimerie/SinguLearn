var Student = require('../models/studentModel.js');
var _       = require('underscore')

// Save a new student record to the database
exports.saveNewStudent = function(userInput, callback){
  var newStudent = new Student;
  newStudent.firstName          = userInput.firstName;
  newStudent.lastName           = userInput.lastName;
  newStudent.userName           = userInput.firstName + userInput.lastName;
  newStudent.period             = userInput.period;
  newStudent.performance        = null;
  newStudent.completedLessons   = [];
  newStudent.currentPlaylist    = [];
  newStudent.mother             = userInput.mother;
  newStudent.motherPhone        = userInput.motherPhone;
  newStudent.father             = userInput.father;
  newStudent.fatherPhone        = userInput.fatherPhone;
  newStudent.caregiver          = userInput.caregiver;
  newStudent.caregiverPhone     = userInput.caregiverPhone;

  newStudent.save(function(err, student) {
    console.log("adding this student: ", student.userName)
    if(err) {
      console.log("Error. Entry not saved")
      return err
    } else {
      console.log("Post saved!")
    }
    callback(null, student);
  });
};




//Retrieve all student records
exports.getAllStudents = function (callback){
  Student.find({}, function(err, students) {
    console.log("all the students", students.length)
    // console.log("all the students", students[3])

    if (err) {
      console.log(err);
    }
  });
};



// Given the name of a student, retrieve their record from the database
exports.getStudentByuserName = function (userName, callback) {
  Student.findOne({'userName': userName}, function (err, student) {
    //console.log("line 47", student);
    if (err) {
      console.log(err);
    }
    callback(null, student);
  });
};

// Given the name of a student, update student personal info in their record in the database

exports.updateStudentRecord = function (userName, filter, userInput) {
  var query = {'userName': userName};
  Student.findOneAndUpdate(query, {$set : {filter : userInput}}, {new: true, upsert:true}, function (err, student) {
    if (err) {
      console.log(err);
    }
    console.log('****************', student[filter])
    //callback(null, student)
  });

}

// Given the name of a student, update playlist info in their record in the database

exports.updateStudentPlaylist = function (userName, playlistItem, callback) {
  var query = {'userName': userName};
  Student.findOneAndUpdate(query,{currentPlaylist:playlistItem}, function (err, student) {
    if (err) {
      console.log(err);
    }
    callback(null, student);
  });

}

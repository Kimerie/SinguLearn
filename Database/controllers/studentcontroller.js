var Student = require('../models/studentModel.js');

// Save a new student record to the database
exports.saveNewStudent = function(userInput, callback) {
  var newStudent = new Student;

  newStudent.firstName          = userInput.firstName;
  newStudent.lastName           = userInput.lastName;
  newStudent.fullName           = userInput.firstName + " " + userInput.lastName;
  newStudent.userName           = userInput.firstName + userInput.lastName;
  newStudent.period             = userInput.period;
  newStudent.performance        = userInput.performance
  newStudent.completedLessons   = [];
  newStudent.currentPlaylist    = userInput.currentPlaylist;
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
exports.getAllStudents = function (callback) {
  Student.find({}, function(err, students) {
    console.log("all the students", students.length)
    // console.log("all the students", students[3])

    if (err) {
      console.log(err);
    }
    callback(null, students);
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

exports.updateStudentRecord = function (userName, param, userInput, callback) {
  var query = {'userName': userName};

  Student.findOne(query, function (err, student) {
    if (err) {
      console.log(err);
    }
    student[param] = userInput;
    student.save();
    console.log('****************', student[param])
    callback(null, student)
  });
};

// Given the name of a student, update playlist info in their record in the database

exports.updateStudentPlaylist = function (input, callback) {
  console.log("Hello from the db side")

  var query = {'fullName': input.fullName};

  Student.findOne(query, function (err, student) {
    if (err) {
      console.log(err);
    }

    for( var i = 0; i < input.playlistItems.length; i++){
      console.log(input.playlistItems[i])
    }
    // student[param] = userInput;
    student.save();
    console.log('****************', student[param])
    callback(null, student)
  });
  // var query = {'fullName': params.selected};
  // console.log("this is the name of person being searched", query)
  // Student.findOneAndUpdate(query, function (err, student) {
  //   console.log("in update student playlist method", student)
  //   console.dir(param)
  //   console.log(query)
  //   console.log(callback)
  //   if (err) {
  //     console.log(err);
  //   }
    // callback(null, student);
  // });

}
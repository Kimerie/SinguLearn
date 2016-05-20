var Student = require('../models/studentModel.js');


// Save a new student record to the database
exports.saveNewStudent = function(userInput, callback){
  var newStudent = {};
  var saveStudent = [];
  newStudent.firstName          = userInput.firstName;
  newStudent.lastName           = userInput.lastName;
  newStudent.userName           = userInput.firstName + userInput.lastName;
  newStudent.period             = userInput.period;
  newStudent.performance        = null;
  newStudent.completedLessons   = [];
  newStudent.currentPlaylist    = [];
  newStudent.parentOrCaregiver  = {"mother": userInput.mother};
  newStudent.parentOrCaregiver  = { "motherPhone" : userInput.motherPhone};
  newStudent.parentOrCaregiver  = {"father": userInput.father};
  newStudent.parentOrCaregiver  = {"fatherPhone" : userInput.fatherPhone};
  newStudent.parentOrCaregiver  = {"caregiver" : userInput.caregiver};
  newStudent.parentOrCaregiver  = {"caregiverPhone" : userInput.caregiverPhone};

  saveStudent.push(newStudent)
  console.log("*************************************************", saveStudent)
  Student.create(saveStudent, function(err, student){
    if(err){
      return err
    }

    console.log("Success! Student saved: ", student)
    callback(null, student)
  });





  // newStudent.pre('save', function(next) {
  //     if (this.isNew) {
  //         // Hooray!
  //         next()
  //     }
  // });

  // newStudent.save(function(err, student) {
  //   console.log("adding this student: ", student.userName)
  //   if(err) {
  //     console.log("Error. Entry not saved")
  //     return err
  //   } else {
  //     console.log("Post saved!")
  //   }
  //   callback(null, student);
  // });
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

// Given the class period, retrieve all student records from the database
exports.getStudentByPeriod = function (input, callback) {
  // var query = {'classPeriod': input}
  Student.find({classPeriod : input}, function (err, students) {
    //console.log("line 58", students);
    if (err) {
      console.log(err);
    }
    callback(null, students);
  });
};


// Given the name of a student, update student personal info in their record in the database

exports.updateStudentRecord = function (firstName, lastname, userInput, callback) {
  var query = { 'firstName': firstName, 'lastName': lastName };
  Student.findOneAndUpdate(query, userInput, function (err, student) {
    if (err) {
      console.log(err);
    }
    callback(null, student);
  });

}

// Given the name of a student, update playlist info in their record in the database

exports.updateStudentPlaylist = function (firstName, lastname, playlistItem, callback) {
  var query = {'firstName': firstName, 'lastName': lastName };
  Student.findOneAndUpdate(query,{currentPlaylist:playlistItem}, function (err, student) {
    if (err) {
      console.log(err);
    }
    callback(null, student);
  });

}

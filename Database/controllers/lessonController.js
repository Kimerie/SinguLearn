var Lesson = require('../models/lessonModel.js');

exports.saveNewLesson = function(userInput, callback){
  var newLesson = new Lesson;
  newLesson.lessonName  = userInput.lessonName;
  newLesson.lessonType  = userInput.lessonType;
  newLesson.subject     = userInput.subject;
  newLesson.grade       = userInput.grade;
  newLesson.questions   = userInput.questions;
  newLesson.answers     = userInput.answers
  newTeacher.created    = Date.now();



  newLesson.save(function(err, data) {
    if(err) {
      console.log("Error. Entry not saved")
      return err
    } else {
      console.log("Post saved!", data)
    }
  });
  callback(null, newLesson);
};

//Retrieve all lesson records
exports.getAllLessons = function (callback) {
  Lesson.find({}, function(err, lessons) {
    // console.log("all the lessons", lessons.length)
    if (err) {
      console.log(err);
    }
  });
};


// Given the name of a lesson, retrieve their record from the database
exports.getLessonByName = function (lessonName, callback) {
  Lesson.findOne({'lessonName': lessonName}, function (err, lesson) {
    //console.log("line 47", student);
    if (err) {
      console.log(err);
    }
    callback(null, lesson);
  });
};

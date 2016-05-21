var chai                = require('chai')
var mocha               = require('mocha')
var expect              = chai.expect;
var should              = chai.should();
var assert              = require('chai').assert;
var mongoose            = require('mongoose');
var Lesson              = require('../models/lessonModel.js');
var LessonController    = require('../controllers/lessoncontroller');
var db                  = require('../Database/db.js')


var dbURI = db.uri;

var clearDB = function (done) {
  mongoose.connection.collections['lessons'].remove(done);
};

describe('Lesson Model', function () {

  it('should be a Mongoose model', function () {
    expect(new Lesson()).to.be.instanceOf(mongoose.Model);
  });

  it('should have a schema', function () {
    expect(Lesson.schema).to.exist;
  });
});

describe('Lesson Controller', function () {

  // Connect to database before any tests
  before(function (done) {
    if (mongoose.connection.db){
      return done();
    }
    mongoose.connect(dbURI, done);
  });

  before(function(done) {
    clearDB(done);
  });

  before(function(done) {

      var lessons = [
        {
          lessonName: "Buzzing Bees",
          lessonType:"Spelling",
          subject: "ELA",
          questions: {q: "What is the correct spelling of this image?", choices: ["sandwick", "sandwich", "sandwitch", "sandwhich"], points: 20},
          answers: {a:"sandwich", points: 20}
        },

        {
          lessonName: "Light as a Rock",
          lessonType:"Metaphors and Similies",
          subject: "ELA",
          questions: {q: "Which statement contains a metaphor?", choices: ["Solid as a rock.", "I am the dragon breathing fire." , "Run like a gazelle." , "When can we eat lunch?" ], points: 20},
          answers: {a:"I am the dragon breathing fire.", points: 20}
        }

      ];
      Lesson.create(lessons, done)
    });

    it ('should read all lesson records from database at once', function(done){


      LessonController.getAllLessons(function(err, lessons){
        console.log("all lessons", students[0])
          console.log(err)
          expect(err).to.not.exist;
          console.log("length", students.length)
          expect(lessons.length).to.equal(2)
        });
        done();
    });

    it ('should have a method that given the name of a lesson, retrieves their record from the database', function (done) {

      LessonController.getLessonByName('Buzzing Bees', function (err, lesson) {
        expect(lesson.lessonName).to.equal('Buzzing Bees');
        done();
      });
    });
  });

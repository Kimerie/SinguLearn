var chai                = require('chai')
var mocha               = require('mocha')
var expect              = chai.expect;
var should              = chai.should();
var assert              = require('chai').assert;
var mongoose            = require('mongoose');
var Student             = require('../models/studentModel.js');
var StudentController   = require('../controllers/studentcontroller');
var onlinedb            = require('../db.js')


var dbURI = onlinedb.uri;

var clearDB = function (done) {
  mongoose.connection.collections['students'].remove(done);
};

describe('Student Model', function () {

  it('should be a Mongoose model', function () {
    expect(new Student()).to.be.instanceOf(mongoose.Model);
  });

  it('should have a schema', function () {
    expect(Student.schema).to.exist;
  });
});

describe('Student Controller', function () {

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

    var students = [
      {
        firstName: "Kimerie",
        lastName:"Green",
        userName: "KimerieGreen",
        classPeriod: 1,
        performance: "off-track",
        completedLessons: [{Lesson: "Analogies"}, {Lesson: "Reading"}],
        currentPlaylist: [{Lesson:"Fractions"}, {Lesson:"Verbs"}],
        mother: null,
        motherPhone : null,
        father : null,
        fatherPhone : null,
        aregiver:null,
        caregiverPhone : null
      },
      {
        firstName: "Marcellus",
        lastName:"Green",
        userName: "MarcellusGreen",
        classPeriod: 7,
        performance: "On-track",
        completedLessons: [{Lesson: "Analogies"}, {Lesson: "Reading"}],
        currentPlaylist: [{Lesson:"Fractions"}, {Lesson:"Verbs"}],
        mother: null,
        motherPhone : null,
        father : null,
        fatherPhone : null,
        aregiver:null,
        caregiverPhone : null

      },
      {
        firstName: "Sydney",
        lastName:"Green",
        userName: "SydneyGreen",
        classPeriod: 7,
        performance: "Ahead of track",
        completedLessons: [{Lesson: "Analogies"}, {Lesson: "Reading"}],
        currentPlaylist: [{Lesson:"Fractions"}, {Lesson:"Verbs"}],
        mother: null,
        motherPhone : null,
        father : null,
        fatherPhone : null,
        aregiver:null,
        caregiverPhone : null
      },

    ];
    Student.create(students, done);
  });

    it ('should create a new student record', function(done){
        var aStudent = {
          firstName:"Slick" ,
          lastName:"Rick",
          classPeriod: 1,
          mother: "Vivian",
          motherPhone: "555-555-5555",
          father: "Phillip",
          fatherPhone: "555-555-5555"
        };

      StudentController.saveNewStudent(aStudent, function(err, aStudent){
          //console.log("is this it?", err)
          expect(err).to.not.exist;
      })
      Student.findOne({firstName: "Slick"}, function(err, student){
        //console.log("%%%%%%%%%%%%%%%%%", student)
        expect(student.lastName).to.equal("Rick")
        expect(student.mother).to.equal("Vivian")
        expect(student.fatherPhone).to.equal("555-555-5555")
        done();
      })
    });

    it ('should read all student records from database at once', function(done){


      StudentController.getAllStudents(function(err, students){
        console.log("all students", students[0])
          console.log(err)
          expect(err).to.not.exist;
          console.log("length", students.length)
          expect(students.length).to.equal(4)
        });
        done();
    });

    it ('should have a method that given the username of a student, retrieves their record from the database', function (done) {

      StudentController.getStudentByuserName('SlickRick', function (err, student) {
        expect(student.userName).to.equal('SlickRick');
        done();
      });
    });
    it ('should have a method that given an input and searh param, updates the student record', function (done) {

      StudentController.updateStudentRecord('SydneyGreen', 'father','Fred', function (err, student) {
        expect(student.father).to.equal('Fred');
        done();
      });
    });
    });

var chai                = require('chai')
var mocha               = require('mocha')
var expect              = chai.expect;
var should              = chai.should();
var assert              = require('chai').assert;
var mongoose            = require('mongoose');
var Teacher             = require('../models/teacherModel.js');
var TeacherController   = require('../controllers/teachercontroller');


var dbURI = 'mongodb://localhost/singuLearnTest'

var clearDB = function (done) {
  mongoose.connection.collections['teachers'].remove(done);
};

describe('Teacher Model', function () {

  it('should be a Mongoose model', function () {
    expect(new Teacher()).to.be.instanceOf(mongoose.Model);
  });

  it('should have a schema', function () {
    expect(Teacher.schema).to.exist;
  });


});

describe('Teacher Controller', function () {

  // Connect to database before any tests
  before(function (done) {
    if (mongoose.connection.db){
      return done();
    }
    mongoose.connect(dbURI, done)
  });

  beforeEach(function(done){
    clearDB(function(){

      var teachers = [
        {
          firstName: "Kimerie",
          lastName:"Green",
          userName: "KimerieGreen",
          subject: "ELA",
          grade: 7,
          Favorites: [{Lesson:"Fractions"}, {Lesson:"Verbs"}]
        }

      ];
      Teacher.create(teachers, done)
    });
    });

    it ('should create a new teacher record', function(done){
        var aTeacher = {
          firstName:"Kendrick" ,
          lastName:"Lamar",
          subject: "ELA",
          grade: 8,
        };

  TeacherController.saveNewTeacher(aTeacher, function(err, aTeacher){
          console.log(err)
          expect(err).to.not.exist;
        })
      Teacher.findOne({firstName: "Kendrick"}, function(err, teacher){
        expect(teacher.lastName).to.equal("Lamar")
        expect(teacher.created).to.exist
        expect(teacher.grade).to.be.a("number")
        done();
      })
    });
  });

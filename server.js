//modules
var express         = require('express');
var app             = express();
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override')
var mongoose        = require('mongoose')
var db              = require('./Database/db.js')
var Student         = require('./Database/controllers/studentcontroller.js')
var StudentModel    = require('./Database/models/studentModel.js')
var router          = express.Router();
var path            = require('path')
// var compression     = require('compression')

var PORT = process.env.PORT || 8000;
process.env.PWD = process.cwd();

app.use(bodyParser.json());
// app.use(compression())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(path.join(process.env.PWD, 'public')));
app.use(express.static(path.join(process.env.PWD, 'assets')));
app.use(express.static(path.join(process.env.PWD, 'components')));
app.set('case sensitive routing', true);
// app.use(express.static('assets'));
// app.use(express.static('Components'));





// app.get('/', function(req, res){
//   console.log('success')
//   res.sendFile(path.join(__dirname, '../public/index.html'))
// });

app.get('/api/students', function(req, res){
  Student.getAllStudents(function(err, students){
    console.log(students)
      res.send(students);
  });
})

app.post('/api/students', function(req, res){
  console.log("Hello from the server side", req.body)
  var params = req.body
  console.log("I must have called 1000 times", params)

  Student.updateStudentPlaylist(function(err, params){
    console.log("ayyyyyyyyyyye", req.body)
  });
  
  // Student.updateStudentPlaylist(function(err, data){
  //   data = params
  // console.log('**********we in the bldg************', data)
  

  // });
  console.log('posted')
  res.send('data received')
  res.end('data!')
})

var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };

mongoose.connect(db.url, options)
mongoose.connection.once('connected', function(err){
  console.log('Default connection open to: ' + db.url)
});

mongoose.connection.on('error', function(err){
  console.log('connection error:' + err)
});

// start up app at heroku ports
app.listen(PORT);

// shoutout to the user
console.log('Production Express server. Magic happens on port ' + PORT);

// expose app
exports = module.exports = app;
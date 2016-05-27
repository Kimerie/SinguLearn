//modules
var express         = require('express');
var app             = express();
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override')
var mongoose        = require('mongoose')
var db              = require('../Database/db.js')
// var swig            = require('swig');
var path            = require('path')


var PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(path.join(__dirname, '../Public')));
app.use('/assets', express.static(path.join(__dirname, '../Public/assets')))

app.all('/*', function(req, res, next){
  res.sendFile(path.join(__dirname, '../Public/', 'index.html'))
});
// app.get('/', function(req, res){
//   console.log('success')
//   // res.sendFile(path.join(__dirname, '../Public/', 'index.html'))
//   // res.send("Hello World!")
// });


//Connection to Database
var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };

mongoose.connect(db.uri, options)
mongoose.connection.once('connected', function(err){
  console.log('Default database connection open to: ' + db.uri)
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

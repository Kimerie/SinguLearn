//modules
var express         = require('express');
var app             = express();
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override')
var mongoose        = require('mongoose')
var db              = require('../Database/db.js')

var mongodbUri = "mongodb://heroku_thj53vw9:ur6rouhri9ek8di8badlfg2rli@ds023042.mlab.com:23042/heroku_thj
53vw9"
var port = process.env.PORT || 8000;
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(methodOverride('X-HTTP-Method-Override'));
//
app.get('/', function(req, res){
  console.log('success', res.body)
  res.send(res.body)
});


mongoose.connect(mongodbUri)
var db = mongoose.connection
db.on('connected', function(err){
  console.log('Default connection open to:' + mongodbUri)
});

db.on('error', function(err){
  console.log('connection error:' + err)
});

// startup our app at heroku port
app.listen(port);

// shoutout to the user
console.log('Magic happens on port ' + port);

// expose app
exports = module.exports = app;

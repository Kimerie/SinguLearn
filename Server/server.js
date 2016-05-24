//modules
var express         = require('express');
var app             = express();
var Router          = require('react-router').Router
var Route           = require('react-router').Route
var Link            = require('react-router').Link
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override')
var mongoose        = require('mongoose')
var db              = require('../Database/db.js')
// var swig            = require('swig');
var React           = require('react');
var ReactDOM        = require('react-dom/server');
var Router          = require('react-router');
var Routes          = require('./routes');
var path            = require('path')
var compression     = require('compression')
require('babel-register');

var PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
// app.use('/static', express.static(__dirname + '../public'))
app.use(compression())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static((__dirname + '../public')));

app.get('/', function(req, res){
  console.log('success')
  res.sendFile(path.join(__dirname, '../public', 'index.html'))
});



var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };

mongoose.connect(db.uri, options)
mongoose.connection.once('connected', function(err){
  console.log('Default connection open to: ' + db.uri)
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

//modules
var express         = require('express');
var app             = express();
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override')
var mongoose        = require('mongoose')
var db              = require('../Database/db.js')

var port = process.env.PORT || 8000;
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'));

app.get('/', function(req, res){
  console.log('success', res.body)
  res.send(res.body)
});

var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };

mongoose.connect(db.uri)
mongoose.connection.once('connected', function(err){
  console.log('Default connection open to: ' + db.uri)
});

mongoose.connection.on('error', function(err){
  console.log('connection error:' + err)
});

// startup our app at heroku ports
// app.listen(port);

// shoutout to the user
console.log('Magic happens on port ' + port);

// expose app
exports = module.exports = app;

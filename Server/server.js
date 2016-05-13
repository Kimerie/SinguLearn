//modules
var express         = require('express');
var app             = express();
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override')
var mongoose        = require('mongoose')
var db              = require('../database/db.js')



var port = process.env.PORT || 8000;
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(methodOverride('X-HTTP-Method-Override'));
//
// app.get('/', function(req, res){
//   if (err) {
//     return console.error(err)
//   }
//   console.log('success')
//   res.send(res.body)
// })

mongoose.connect(db.url)
mongoose.connection.on('connected', function(err){
  console.log('Default connection open to:' + db.url)
});

mongoose.connection.on('error', function(err){
  console.log('connection error:' + err)
});

// startup our app at http://localhost:8000
app.listen(port);

// shoutout to the user
console.log('Magic happens on port ' + port);

// expose app
exports = module.exports = app;

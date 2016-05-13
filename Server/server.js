//modules
var express         = require('express');
var app             = express();
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override')
var mongoose        = require('mongoose')

var port = process.env.PORT || 8000;
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(methodOverride('X-HTTP-Method-Override'));
// app.use(express.static(__dirname + '/public'));
//
// app.get('/', function(req, res){
//   if (err) {
//     return console.error(err)
//   }
//   console.log('success')
//   res.send(res.body)
// })

// startup our app at http://localhost:8000
app.listen(port);

// shoutout to the user
console.log('Magic happens on port ' + port);

// expose app
exports = module.exports = app;

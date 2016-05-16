var uid = require('uid2');
var mongoose = require('mongoose')

var userSchema = new mongoose.Schema ({
  userType: {type: String, required: true},
  local: {
    username: {
      type: String,
      unique: true,
      required: true
    },
    hashedPassword: {
      type: String,
      required: true
    },
    created: {
      type: Date,
      default: Date.now
    }
  },

  facebook: {
    id: String,
    token: String,
    displayName: String,
    username: String
  },

  google: {
    id: String,
    token: String,
    displayName: String,
    username: String
  },

  twitter: {
    id: String,
    token: String,
    displayName: String,
    username: String
  },

});

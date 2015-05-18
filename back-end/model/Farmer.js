(function() {
  'use strict';

  var bcrypt    = require('bcrypt-nodejs'),
  mongoose      = require('mongoose');

  var FarmerSchema = new mongoose.Schema({
    email: {
      type: String,
      unique: true,
    },
    password: String,
    username: String,
    firstName: String,
    lastName: String,
    googleId: String,
    facebookId: String,
    displayName: String
  });

  module.exports = mongoose.model('Farmer', FarmerSchema);
}());

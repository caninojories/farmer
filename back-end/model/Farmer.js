(function() {
  'use strict';

  var bcrypt    = require('bcrypt-nodejs'),
  mongoose      = require('mongoose');

  var FarmerSchema = new mongoose.Schema({
    last_name: String,
    email: {
      type: String,
      unique: true,
    },
    password    : String,
    company_name: String,
    address     : String,
    city        :String,
    state       : String,
    zip         : String,
    phone       : Number,
    description : String,
    farm_size   : Number,
  });

  module.exports = mongoose.model('Farmer', FarmerSchema);
}());

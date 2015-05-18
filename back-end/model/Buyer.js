(function() {
  'use strict';

  var bcrypt    = require('bcrypt-nodejs'),
  mongoose      = require('mongoose');

  var BuyerSchema = new mongoose.Schema({
    first_name: String,
    last_name : String,
    email: {
      type: String,
      unique: true,
    },
    password        : String,
    company_name    : String,
    address         : String,
    city            :String,
    state           : String,
    zip             : String,
    phone           : Number,
    description     : String,
    monthly_expense : Number,
    business_type   : String
  });

  module.exports = mongoose.model('Buyer', BuyerSchema);
}());

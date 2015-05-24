(function() {
  'use strict';

  var bcrypt    = require('bcrypt-nodejs'),
  mongoose      = require('mongoose');

  var Farmer_Inventory = new mongoose.Schema({
    farmer_id         : String,
    variety_name      : String,
    photo             : String,
    product_type      : String,
    quantity          : Number,
    case              : Number,
    price             : Number,
    attachments       : String,
    comments          : String
  });

  module.exports = mongoose.model('Farmer_Inventory', Farmer_Inventory);
}());

(function() {
  'use strict';

  var bcrypt    = require('bcrypt-nodejs'),
  mongoose      = require('mongoose');

  var Farmer_Inventory = new mongoose.Schema({
    farmer_id         : String,
    variety_name      : String,
    photo             : String,
    product_type      : String,
    quantity          : {
      type: Number,
      default: 0
    },
    case              : {
      type: Number,
      default: 0
    },
    price             : {
      type: Number,
      default: 0
    },
    dates             : Array,
    attachments       : {
      type: String,
      default: null
    },
    comments          : {
      type: String,
      default: null
    }
  });

  module.exports = mongoose.model('Farmer_Inventory', Farmer_Inventory);
}());

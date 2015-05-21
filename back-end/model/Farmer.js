(function() {
  'use strict';

  var bcrypt    = require('bcrypt-nodejs'),
  mongoose      = require('mongoose');

  var FarmerSchema = new mongoose.Schema({
    firt_name: String,
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
    status    : {
      type    : String,
      default : 'Pending'
    }
  });

  FarmerSchema.pre('save', function(next) {
    var user = this;

    if (!user.isModified('password')) {
      return next();
    }

    bcrypt.genSalt(10, function(err, salt) {
      if (err) {
        return next(err);
      }
      bcrypt.hash(user.password, salt, null, hashPassword);
    });

    function hashPassword(err, hash) {
      if (err) {
        return next (err);
      }
      user.password = hash;
      next();
    }
  });

  FarmerSchema.methods.toJSON = function() {
    var user = this.toObject();
    delete user.password;

    return user;
  };

  FarmerSchema.methods.comparePasswords = function(password, callback) {
    bcrypt.compare(password, this.password, callback);
  };

  module.exports = mongoose.model('Farmer', FarmerSchema);
}());

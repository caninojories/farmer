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
    business_type   : String,
    status    : {
      type    : String,
      default : 'Pending'
    }
  });

  BuyerSchema.pre('save', function(next) {
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

  BuyerSchema.methods.toJSON = function() {
    var user = this.toObject();
    delete user.password;

    return user;
  };

  BuyerSchema.methods.comparePasswords = function(password, callback) {
    bcrypt.compare(password, this.password, callback);
  };

  module.exports = mongoose.model('Buyer', BuyerSchema);
}());

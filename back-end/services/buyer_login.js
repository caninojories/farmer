(function() {
  'use strict';

  module.exports = function(req, res, next) {
    if(req.status === 200) {
      console.log('200 user');
      return next();
    }

    if(req.status_data === 'Pending') {
      console.log('pending user');
      var err     = new Error('Pending Account');
      err.status  = 401;
      return next(err);
    }

    var email     = req.body.email,
        password  = req.body.password;

    findUser();

    function findUser() {
      io.Buyer.findOne({
        email: email
      }, function(err, user) {
        if (err) {return next(err);}
        if (!user) {
          err         = new Error('Invalid Email');
          err.status  = 401;
          return next(err);
        }

        user.comparePasswords(password, function(err, isMatch) {
          if (err) {return next(err);}
          if (user.status === 'Pending') {
            req.message     = 'Farmer account is in Pending';
            req.status_data = user.status;
            return next();
          }
          if (!isMatch) {
            err         = new Error('Invalid Password');
            err.status  = 401;
            return next(err);
          }

          req.message = 'User Login';
          req.status  = 200;
          req.user    = user;
          next();
        });
      });
    }
  };
}());

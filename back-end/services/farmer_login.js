(function() {
  'use strict';

  module.exports = function(req, res, next) {
    var email     = req.body.email,
        password  = req.body.password;
    io.mongoDB(io.config.dbName)
      .then(findUser);

    function findUser() {
      io.Farmer.findOne({
        email: email
      }, function(err, user) {
        if (err) {return next(err);}
        if (!user) {
          return next();
        }

        user.comparePasswords(password, function(err, isMatch) {
          if (err) {return next(err);}
          if (user.status === 'Pending') {
            req.message       = 'Farmer account is in Pending';
            req.status_data   = user.status;
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

(function() {
  'use strict';

  exports._ = function(options) {
    var document = io[options.name](options.details);
      document.save(function(error) {
        if (options.done) {options.done(null, document);}
        else {options.res.json({message: options.message, status: 200, data: document});}
      });
  };

  exports._notify_email = function(options) {
    var document = io[options.name](options.details);
      document.save(function(error) {
        if (error) {return;}
        io.notify_by_email(io, options.query.email, options.res, document);
      });
  };

  exports.User = function(options) {
    var document = io[options.name](options.details);
      document.save(function(err) {
        if (err) {return options.next(err);}
        options.req.message = 'User Login';
        options.req.status  = 200;
        options.req.user    = document;
        options.next();
      });
  };
}());

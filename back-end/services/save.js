(function() {
  'use strict';

  exports._ = function(options) {
    console.log(options);
    var document = io[options.name](options.details);
      document.save(function(error) {
        console.log(error);
        if (options.done) {options.done(null, document);}
        else {options.res.json({message: options.message, status: 200, data: document});}
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

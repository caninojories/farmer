(function() {
  'use strict';

  exports.putById = function(options) {
    return io[options.name]
      .findById(options.find.toString())
      .exec()
      .then(details)
      .then(function(result) {
        result.save(function(err, result) {
          console.log(err);
          console.log(result);
          if (err) {return;}
          io.notify_approved_by_email(io, result.email, options.res);
        });
      });

      function details(result) {
        for (var obj in options.details) {
          if (options.details.hasOwnProperty(obj)) {
            result[obj] = options.query[obj];
          }
        }
        return result;
      }
  };
}());

(function() {
  'use strict';

  exports.putById = function(options) {
    return io[options.name]
      .findById(options.find.toString())
      .exec()
      .then(details)
      .then(function(result) {
        result.save(function(err, result) {
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

  exports.putById_ = function(options) {
    return io[options.name]
      .findById(options.find.toString())
      .exec()
      .then(details)
      .then(function(result) {
        result.save(function(err, result) {
          if (err) {return options.next(err);}
          options.res.json({
            message : 'Updating data from farmers Inventory',
            status  : 200,
            data    : result
          });
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

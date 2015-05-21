(function() {
  'use strict';

  exports.buyer_status = function(req, res, next) {
    var query = io.url.parse(req.url, true).query,
        param = req.params;

    var options = {
      name  : 'Buyer',
      find  : param.id,
      query : query,
      res   : res,
      details: {
        status: 'status'
      }
    };

    io.mongoDB(io.config.dbName)
      .then(function() {
        io.update.putById(options);
      });

  };
}());

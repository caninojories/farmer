(function() {
  'use strict';

  exports.buyer_list = function(req, res, next) {
    var options = {
      name: 'Buyer',
      res : res
    };

    io.mongoDB(io.config.dbName)
      .then(io.get.findList(options));
  };
}());

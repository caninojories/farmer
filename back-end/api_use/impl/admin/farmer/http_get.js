(function() {
  'use strict';

  exports.farmer_list = function(req, res, next) {
    var options = {
      name: 'Farmer',
      res : res
    };

    io.mongoDB(io.config.dbName)
      .then(io.get.findList(options));
  };
}());

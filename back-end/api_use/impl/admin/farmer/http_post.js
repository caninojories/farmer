(function() {
  'use strict';

  exports.farmer_inventory = function(req, res, next) {
    var files = req.files;

    console.log(req.files);
    res.json({files: req.files});

    // io.mongoDB(io.config.dbName)
    //   .then(io.get.findList(options));
  };
}());

(function() {
  'use strict';

  exports.farmer_inventory = function(req, res, next, user) {
    var body = req.body;

    console.log(body);
    console.log(user);
  };

  exports.farmer_image = function(req, res, next) {
    var files = req.files;

    console.log(req.files);
    res.json({files: req.files});
  };
}());

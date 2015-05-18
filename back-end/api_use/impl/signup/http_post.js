(function() {
  'use strict';

  exports.farmer = function(req, res, next) {
    var query = io.url.parse(req.url, true).query;
    console.log(query);
    res.json({
      message : 'Farmer',
      status  : 200,
      data    : 'Sample data',
    });
  };

  exports.buyer = function(req, res, next) {
    var query = io.url.parse(req.url, true).query;
    console.log(query);
    res.json({
      message : 'Farmer',
      status  : 200,
      data    : 'Sample data',
    });
  };
}());

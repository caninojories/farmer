(function() {
  'use strict';

  exports.farmer = function(req, res, next) {
    var query = io.url.parse(req.url, true).query;
    console.log(query);

    // var options = {
    //   name  : 'Farmer',
    //   res   : res,
    //   details : {
    //
    //   }
    // };

    res.json({
      message : 'Saving data in Farmer',
      status  : 200,
      data    : 'Sample data',
    });
  };

  exports.buyer = function(req, res, next) {
    var query = io.url.parse(req.url, true).query;
    console.log(query);
    res.json({
      message : 'Saving data in Buyer',
      status  : 200,
      data    : 'Sample data',
    });
  };
}());

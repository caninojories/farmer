(function() {
  'use strict';

  exports.farmer = function(req, res, next) {
    var query = io.url.parse(req.url, true).query;

    console.log(query);
  };
}());

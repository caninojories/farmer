(function() {
  'use strict';

  exports.farmer_status = function(req, res, next) {
    var query = io.url.parse(req.url, true).query,
        param = req.params;

    var options = {
      name  : 'Farmer',
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

  exports.farmer_inventory = function(user, req, res, next) {
    var query = io.url.parse(req.url, true).query;

    console.log(query);
  };

  exports.farmer_inventory_details = function(user, req, res, next) {
    var query    = io.url.parse(req.url, true).query,
        params   = req.params,
        user_id = user.sub;

    var options = {
      name    : 'Farmer_Inventory',
      find    : params.id,
      query   : query,
      res     : res,
      next    : next,
      message : 'Update Inventory for Farmer',
      details: {
        quantity      : 'quantity',
        case          : 'case',
        price         : 'price',
        dates         : 'dates',
        attachments   : 'attachments',
        comments      : 'comments'
      }
    };

    io.mongoDB(io.config.dbName)
      .then(io.update.putById_(options));
  };
}());

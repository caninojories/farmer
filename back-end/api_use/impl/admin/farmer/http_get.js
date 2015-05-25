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

  /*inventory list in the client*/
  exports.farmer_inventory_all = function(req, res, nex) {
    var options = {
      message: 'Retrieving data from farmers Inventory',
      name: 'Farmer_Inventory',
      res : res
    };

    io.mongoDB(io.config.dbName)
      .then(io.get.findListData(options));
  };

  /*inventory list per farmer*/
  exports.farmer_inventory_list = function(user, req, res, next) {
    if (user.sub) {
      var options = {
        name  : 'Farmer_Inventory',
        res   : res,
        find  : {farmer_id: user.sub},
      };

      io.mongoDB(io.config.dbName)
        .then(io.get.findListData(options));
    } else {
      res.json({
        message : 'No Inventory Present',
        status  : 200
      });
    }
  };

  exports.farmer_inventory_details = function(user, req, res, next) {
    if (user.sub) {
      var options = {
        name    : 'Farmer_Inventory',
        message : 'Retrieving data from farmers Inventory Details',
        res     : res,
        find    : req.params.id,
      };

      io.mongoDB(io.config.dbName)
        .then(io.get.findOneById(options));
    } else {
      res.json({
        message : 'No Inventory Present',
        status  : 200
      });
    }
  };
}());

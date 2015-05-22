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

  exports.farmer_inventory_list = function(user, req, res, next) {
    console.log(user.sub);
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
}());

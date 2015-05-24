(function() {
  'use strict';

  exports.farmer_inventory = function(user, req, res, next) {
    var query    = req.body,
        user_id = user.sub;

    var options = {
      name    : 'Farmer_Inventory',
      query   : query,
      res     : res,
      message : 'Saving Inventory for Farmer',
      details: {
        farmer_id     : user.sub,
        variety_name  : query.variety_name,
        photo         : query.photo,
        product_type  : query.product_type
      }
    };

    console.log('saving inventory');
    console.log(user.sub);
    io.mongoDB(io.config.dbName)
      .then(io.save._(options));
  };


  exports.farmer_image = function(req, res, next) {
    var files = req.files;

    console.log(req.files);
    res.json({files: req.files});
  };
}());

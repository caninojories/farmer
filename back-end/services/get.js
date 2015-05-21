(function() {
  'use strict';

  /*use in the datatables in angularjs*/
  exports.findList = function(options) {
    return io[options.name]
      .find(options.find || {})
      .sort(options.sort || {})
      .exec()
      .then(function(result) {
        options.res.status(200).send(result);
      });
  };

  exports.findListData = function(options) {
    return io[options.name]
      .find(options.find || {})
      .sort(options.sort || {})
      .exec()
      .then(function(result) {
        options.res.json({
          message : 'Retrieving data from farmers Inventory',
          status  : 200,
          data    : result
        });
      });
  };

  exports.findOne = function(options) {
    return options.io[options.name]
      .findOne(options.find)
      .exec()
      .then(function(result) {
        options.res.json(result);
      });
  };

  exports.findOneById = function(options) {
    return options.io[options.name]
      .findById(options.find)
      .exec()
      .then(function(result) {
        return options.res.json(result);
      });
  };
}());

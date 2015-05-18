(function() {
  'use strict';

  exports.farmer = function(req, res, next) {
    var query = req.body;
    var error = '';

    if (query.last_name === undefined || query.email === undefined || query.password === undefined ||
      query.company_name === undefined || query.address === undefined || query.city === undefined ||
      query.state === undefined || query.zip === undefined || query.phone === undefined ||
      query.description === undefined || query.farm_size === undefined ) {
        error += 'last_name: ' + query.last_name + '\n';
        error += 'email: ' + query.email + '\n';
        error += 'password: ' + query.password + '\n';
        error += 'company_name: ' + query.company_name + '\n';
        error += 'address: ' + query.address + '\n';
        error += 'city: ' + query.city + '\n';
        error += 'state: ' + query.state + '\n';
        error += 'zip: ' + query.zip + '\n';
        error += 'phone: ' + query.phone + '\n';
        error += 'description: ' + query.description + '\n';
        error += 'farm_size: ' + query.farm_size + '\n';

        return res.json({message : 'Please check if there are undefined entry your data \n', data: error});
    } else {
      var options = {
        name    : 'Farmer',
        res     : res,
        message : 'Saving data in Farmer',
        details : {
          last_name   : query.last_name,
          email       : query.email,
          password    : query.password,
          company_name: query.company_name,
          address     : query.address,
          city        : query.city,
          state       : query.state,
          zip         : query.zip,
          phone       : query.phone,
          description : query.description,
          farm_size   : query.farm_size,
        }
      };

      io.mongoDB(io.config.dbName)
        .then(io.save(options));
    }
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

(function() {
  'use strict';

  var app    = io.express(),
      users_buyer_list    = require('../impl/admin/buyer/http_get.js'),
      users_buyer_status  = require('../impl/admin/buyer/http_put.js');

  app.route('/buyer/list')
    .get(users_buyer_list.buyer_list);

  app.route('/buyer/status/:id')
    .put(users_buyer_status.buyer_status);

  module.exports = app;
}());

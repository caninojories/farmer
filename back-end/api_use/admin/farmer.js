(function() {
  'use strict';

  var app    = io.express(),
      users_farmer_list       = require('../impl/admin/farmer/http_get.js'),
      users_farmer_status     = require('../impl/admin/farmer/http_put.js'),
      users_farmer_inventory  = require('../impl/admin/farmer/http_post.js');

  app.route('/farmer/list')
    .get(users_farmer_list.farmer_list);

  app.route('/farmer/status/:id')
    .put(users_farmer_status.farmer_status);

  app.route('/farmer/inventory')
    .post(users_farmer_inventory.farmer_inventory);

  module.exports = app;
}());

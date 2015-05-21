(function() {
  'use strict';

  var app   = io.express(),
      login_ = require('../impl/login/http_post.js');

  app.route('/login/user')
    .post(io.farmer_login, io.buyer_login, login_.user);


  module.exports = app;
}());

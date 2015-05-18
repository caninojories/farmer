(function() {
  'use strict';

  var app     = io.express(),
      signup  = require('../impl/signup/http_post.js');

    app.route('/signup/farmer')
      .post(signup.farmer);

  module.exports = app;
}());

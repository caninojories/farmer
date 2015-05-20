(function() {
  'use strict';

  var router  = io.express.Router();

  router.get('/client/farmer/inventory.html', function(req, res) {
    res.render('client/farmer/inventory.html');
  });

  router.get('/client/farmer/account_settings.html', function(req, res) {
    res.render('client/farmer/account_settings.html');
  });

  module.exports = router;
}());

(function() {
  'use strict';

  var router  = io.express.Router();

  router.get('/client/login/farmer.html', function(req, res) {
    res.render('client/login/farmer.html');
  });

  router.get('/client/login/buyer.html', function(req, res) {
    res.render('client/login/buyer.html');
  });

  module.exports = router;
}());

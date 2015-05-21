(function() {
  'use strict';

  var router  = io.express.Router();

  router.get('/admin/users/index.html', function(req, res) {
    res.render('admin/users/index.html');
  });

  router.get('/admin/users/farmer.html', function(req, res) {
    res.render('admin/users/farmer.html');
  });

  router.get('/admin/users/buyer.html', function(req, res) {
    res.render('admin/users/buyer.html');
  });
  module.exports = router;
}());

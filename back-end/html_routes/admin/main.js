(function() {
  'use strict';

  var router  = io.express.Router();

  router.get('/admin/main/index.html', function(req, res) {
    res.render('admin/main/index.html');
  });

  module.exports = router;
}());

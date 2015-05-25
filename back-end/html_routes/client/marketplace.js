(function() {
  'use strict';

  var router  = io.express.Router();

  router.get('/client/marketplace/index.html', function(req, res) {
    res.render('client/marketplace/index.html');
  });

  module.exports = router;
}());

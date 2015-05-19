(function() {
  'use strict';

  module.exports = function(app, io) {
    var clientRoutes    = io.rootPath + 'back-end/html_routes/client/',
        use_app_client  = {
          farmer   : require(clientRoutes + 'farmer'),
          main     : require(clientRoutes + 'main'),
          signup   : require(clientRoutes + 'signup'),
          sample   : require(clientRoutes + 'sample'),
        };

    return useApp([
      use_app_client.farmer,
      use_app_client.main,
      use_app_client.signup,
      use_app_client.sample
    ]);

    function useApp(param) {
      param.forEach(function(name) {
        app.use('/', name);
      });
    }
  };
}());

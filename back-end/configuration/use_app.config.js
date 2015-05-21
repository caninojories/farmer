(function() {
  'use strict';

  module.exports = function(app, io) {
    var clientRoutes    = io.rootPath + 'back-end/html_routes/client/',
        adminRoutes     = io.rootPath + 'back-end/html_routes/admin/',
        use_app_client  = {
          farmer    : require(clientRoutes + 'farmer'),
          main      : require(clientRoutes + 'main'),
          signup    : require(clientRoutes + 'signup'),
          sample    : require(clientRoutes + 'sample'),
        },
        use_app_admin   = {
          main        : require(adminRoutes + 'main'),
          users       : require(adminRoutes + 'users'),
        };

    return useApp([
      use_app_client.farmer,
      use_app_client.main,
      use_app_client.signup,
      use_app_client.sample,

      /*admin app*/
      use_app_admin.main,
      use_app_admin.users
    ]);

    function useApp(param) {
      param.forEach(function(name) {
        app.use('/', name);
      });
    }
  };
}());

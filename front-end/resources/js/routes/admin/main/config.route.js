(function() {
  'use strict';

  angular
    .module('app.admin_main')
    .run(appRun);

    appRun.$inject = ['routehelper'];
    function appRun(routehelper) {
      routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
      return [{
        state: 'admin_main',
        config: {
          url: '/admin',
          templateUrl: '/admin/main/index.html',
          controller: 'Admin_Main as vm',
          title: 'Admin Main'
        }
      }];
    }
}());

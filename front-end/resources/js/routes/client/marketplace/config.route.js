(function() {
  'use strict';

  angular
    .module('app.marketplace')
    .run(appRun);

    appRun.$inject = ['routehelper'];
    function appRun(routehelper) {
      routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
      return [{
        state: 'marketplace',
        config: {
          url: '/marketplace',
          templateUrl: '/client/marketplace/index.html',
          controller: 'Marketplace as vm',
          title: 'Marketplace'
        }
      }];
    }
}());

(function() {
  'use strict';

  angular
    .module('app.farmer')
    .run(appRun);

    appRun.$inject = ['routehelper'];
    function appRun(routehelper) {
      routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
      return [{
        state: 'inventory',
        config: {
          url: '/farmer/inventory',
          templateUrl: '/client/farmer/inventory.html',
          controller: 'Inventory as vm',
          title: 'Inventory',
          resolve: {/* @ngInject */

          }
        }
      }];
    }
})();

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
          title: 'Inventory'
        }
      }, {
          state: 'account_settings',
          config: {
            url: '/farmer/account_settings',
            templateUrl: '/client/farmer/account_settings.html',
            controller: 'Account_settings as vm',
            title: 'Account_settings'
          }
      }];
    }
}());

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
          resolve:{
            load_items: function($q, $rootScope, commonsDataService, admin_users_service_api) {

              $q.all([load_itemCallback()])
                .then(function(response) {
                  $rootScope.totalObj = response[0].data.total;
                });

                function load_itemCallback() {
                return commonsDataService
                  .httpGETQueryParams('item', {}, admin_users_service_api)
                  .then(function(response) {
                    return response;
                  });
              }



            }


          }
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

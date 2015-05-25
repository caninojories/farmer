(function() {
  'use strict';

  angular
    .module('app.marketplace')
    .controller('Marketplace', Marketplace);

    Marketplace.$inject = ['$q', '$rootScope', 'admin_users_service_api', 'commonsDataService'];

    /* @ngInject */
    function Marketplace($q, $rootScope, admin_users_service_api, commonsDataService) {
      var vm = this;

      inventory();

      function inventory() {
        $q.all([inventoryCallback()])
          .then(function(response) {
            $rootScope.marketplace_data = response[0].data;
          });
      }

      function inventoryCallback() {
        return commonsDataService
          .httpGETQueryParams(
            'farmer/inventory/list',
            {},
            admin_users_service_api
          ).then(function(response) {
            return response;
          });
      }
    }
}());

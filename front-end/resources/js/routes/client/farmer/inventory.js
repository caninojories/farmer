(function() {
  'use strict';

  angular
  .module('app.farmer')
  .controller('Inventory', Inventory);

  Inventory.$inject = ['$q', '$scope',  'admin_users_service_api', 'commonsDataService',
  'strapModal', 'Upload', 'viewContentLoaded'];

  /* @ngInject */
  function Inventory($q, $scope, admin_users_service_api, commonsDataService,
  strapModal, Upload, viewContentLoaded) {
    var vm = this;

    /*Literals assignment*/

    /*Functions assignment*/
    vm.add_inventory    = add_inventory;

    function add_inventory(){
      strapModal.show('am-fade-and-scale', 'center', 'commons/add_inventory.html');
    }
  }
})();

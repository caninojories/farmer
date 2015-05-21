(function() {
  'use strict';

  angular
  .module('app.farmer')
  .controller('Inventory', Inventory);

  Inventory.$inject = [
    'logger',
    'viewContentLoaded',
    'strapModal',
    'commonsDataService',
    '$q',
    'admin_users_service_api'
    ];

  /* @ngInject */
  function Inventory(
    logger,
    viewContentLoaded,
    strapModal,
    commonsDataService,
    $q,
    admin_users_service_api){

    var vm = this;
    vm.add_inventory=add_inventory;
    vm.add_item_link=add_item_link;
    vm.add_item=add_item;

    function add_inventory(){
      console.log('click');
      strapModal.show('am-fade-and-scale', 'center', 'commons/add_inventory.html');
    }
    function add_item_link(){
      console.log('clickssss');
      strapModal.show('am-fade-and-scale', 'center', 'commons/add_item.html');
    }
    function add_item(){
      console.log('save');

            console.log(vm.variety_name);
                  console.log(vm.photo);
      // $q.all([total_searchCallback()])
      //   .then(function(response) {
      //     console.log(response);
      //   });
    }
    function total_searchCallback() {
      return commonsDataService
        .httpPOSTQueryParams('farmer/inventory', {
          variety_name : vm.variety_name,
          photo: vm.photo,
          product_type:vm.product_type
        }, admin_users_service_api)
        .then(function(response) {
          return response;
        });
    }

  }
})();

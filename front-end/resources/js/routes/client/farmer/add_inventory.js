(function() {
  'use strict';

  angular
  .module('app.farmer')
  .controller('Add_Inventory', Add_Inventory);

  Add_Inventory.$inject = ['$q', '$scope', 'strapModal', 'admin_users_service_api', 'commonsDataService'];

  /* @ngInject */
  function Add_Inventory($q, $scope, strapModal, admin_users_service_api, commonsDataService) {
    var vm = this;

    /*Initialization of variables*/
    vm.user_dates_selected = [];

    /*Function*/
    vm.add_item_link  = add_item_link;
    vm.log_info       = log_info;

    item_load();

    function add_item_link(){
      strapModal.show('am-fade-and-scale', 'center', 'commons/add_item.html');
    }

    function item_load() {
      $q.all([item_loadCallback()])
        .then(function(response) {
          console.log(response);
          vm.inventory_items = response[0].data;
        });
    }

    function item_loadCallback() {
      return commonsDataService
        .httpGETQueryParams(
          'farmer/inventory',
          {},
          admin_users_service_api
        ).then(function(response) {
          return response;
        });
    }

    function log_info(event, date) {
      var dateSelected = date;
      if (event.type === 'click') {
        dateSelected = moment(date).format('YYYY-M-DD');
        // user_dates_selected.push()
        // var select = moment(date).format('YYYY-M-DD') + ' has been ' + (date.selected ? 'false' : 'true');
        var select = date.selected ? 'false' : 'true';

        if (select === 'true') {
          date_selected(dateSelected);
        } else {
          date_unselected(dateSelected);
        }
      }
    }

    function date_selected(date) {
      console.log('date_selected');
      vm.user_dates_selected.push(date);
      console.log(vm.user_dates_selected);
    }

    function date_unselected(date) {
      console.log('date_unselected');
      var position = vm.user_dates_selected.indexOf(date);
      vm.user_dates_selected.splice(position, 1);
      console.log(position);
    }
    

    function add_inventory_item() {
      $q.all([add_inventory_itemCallback()])
        .then(function(response) {
          strapModal.hide();
        });
    }


    function add_inventory_itemCallback() {
      return commonsDataService
        .httpPOSTQueryParams('farmer/inventory', {
          variety_name  : vm.variety_name,
          photo         : vm.photo_name,
          product_type  :vm.product_type
        }, admin_users_service_api)
        .then(function(response) {
          return response;
        });
    }
  }
})();

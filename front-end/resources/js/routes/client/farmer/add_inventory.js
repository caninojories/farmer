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
    vm.add_inventory  = add_inventory;
    vm.item_details   = item_details;
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

    function item_details(id) {
      vm.id = id;
      $q.all([item_detailsCallback(id)])
        .then(function(response) {
          console.log(response);
          var obj     = response[0].data;
          vm.quantity = obj.quantity;
          vm.case     = obj.case;
          vm.price    = obj.case;
          vm.comments = obj.comments;
        });
    }

    function item_detailsCallback(id) {
      return commonsDataService
        .httpGETRouteParams(
          'farmer/inventory',
          id,
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
        var select = date.selected ? 'false' : 'true';

        if (select === 'true') {
          date_selected(dateSelected);
        } else {
          date_unselected(dateSelected);
        }
      }
    }

    function date_selected(date) {
      vm.user_dates_selected.push(date);
    }

    function date_unselected(date) {
      var position = vm.user_dates_selected.indexOf(date);
      vm.user_dates_selected.splice(position, 1);
    }

    function add_inventory() {
      $q.all([add_inventoryCallback()])
        .then(function(response) {
          console.log(response);
        });
    }

    function add_inventoryCallback() {
      return commonsDataService
        .httpPUTRouteParams('farmer/inventory',
          vm.id,
          { quantity          : vm.quantity,
            case              : vm.case,
            price             : vm.price,
            dates             : vm.user_dates_selected,
            attachments       : vm.attachments,
            comments          : vm.comments
          },
          admin_users_service_api
        ).then(function(response) {
          return response;
        });
    }
  }
})();

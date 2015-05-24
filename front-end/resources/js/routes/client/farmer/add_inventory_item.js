(function() {
  'use strict';

  angular
  .module('app.farmer')
  .controller('Add_Inventory_Item', Add_Inventory_Item);

  Add_Inventory_Item.$inject = ['$q', '$scope', '$timeout', 'strapModal', 'Upload',
  'admin_users_service_api', 'commonsDataService'];

  /* @ngInject */
  function Add_Inventory_Item($q, $scope, $timeout, strapModal, Upload,
  admin_users_service_api, commonsDataService) {
    var vm = this;

    /*Initialization of variables*/
    vm.show_progress_bar = false;

    /*Function*/
    vm.upload             = upload;
    vm.add_inventory_item = add_inventory_item;
    // vm.save_item_details  = save_item_details;

    $scope.$watch('vm.files', function () {
      upload(vm.files);
    });

    function upload(files) {
      if (files && files.length) {
        for (var i = 0; i < files.length; i++) {
          vm.show_progress_bar = true;
          var file = files[i];
          Upload.upload({
            url: 'admin_users_Api/farmer/inventory/image',
            fields: {'username': ''},
            file: file
          }).progress(function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            $timeout(function() {
            }, 0);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
            vm.percentage = progressPercentage + '%';
          }).success(function (data, status, headers, config) {
            vm.photo_name = data.files.file.name;
            vm.show_progress_bar = false;
            vm.success = true;
          });
        }
      }
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

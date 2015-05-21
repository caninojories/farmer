(function() {
  'use strict';

  angular
  .module('app.farmer')
  .controller('Inventory', Inventory);

  Inventory.$inject = ['$q', '$scope',  'admin_users_service_api', 'commonsDataService',
  'strapModal', 'Upload'];

  /* @ngInject */
  function Inventory($q, $scope, admin_users_service_api, commonsDataService,
  strapModal, Upload) {
    var vm = this;

    /*Literals assignment*/

    /*Functions assignment*/
    vm.add_inventory  = add_inventory;
    vm.add_item_link  = add_item_link;
    vm.add_item       = add_item;
    vm.upload         = upload;

    $scope.$watch('vm.files', function () {
      upload(vm.files);
    });

    function upload(files) {
      if (files && files.length) {
        for (var i = 0; i < files.length; i++) {
          var file = files[i];
          console.log(file);
          Upload.upload({
            url: 'admin_users_Api/farmer/inventory/image',
            fields: {'username': ''},
            file: file
          }).progress(function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
            vm.percentage = progressPercentage + '%';
          }).success(function (data, status, headers, config) {
            vm.photo_name = data.files.file.name;
          });
        }
      }
    }

    function add_inventory(){
      console.log('click');
      strapModal.show('am-fade-and-scale', 'center', 'commons/add_inventory.html');
    }

    function add_item_link(){
      console.log('clickssss');
      strapModal.show('am-fade-and-scale', 'center', 'commons/add_item.html');
    }

    function add_item(){

      console.log('save item');
      $q.all([add_itemCallback()])
        .then(function(response) {
          console.log(response);
        });
      strapModal.hide();
    }

    function save_itemChange(){

      console.log('save item');
      strapModal.hide();
    }

    function add_itemCallback() {
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

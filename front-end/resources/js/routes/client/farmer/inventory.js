(function() {
  'use strict';

  angular
  .module('app.farmer')
  .controller('Inventory', Inventory);

  Inventory.$inject = ['logger', 'viewContentLoaded'];

  /* @ngInject */
  function Inventory(logger, viewContentLoaded) {
    var vm = this;
    vm.add_inventory=add_inventory;

    function add_inventory(){
      console.log('click');
    }

  }
})();

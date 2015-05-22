(function() {
  'use strict';

  angular
  .module('app.farmer')
  .controller('Add_Inventory', Add_Inventory);

  Add_Inventory.$inject = ['$scope', 'logger', 'viewContentLoaded'];

  /* @ngInject */
  function Add_Inventory($scope, logger, viewContentLoaded) {
    var vm = this;
  }
})();

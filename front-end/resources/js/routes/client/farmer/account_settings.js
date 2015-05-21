(function() {
  'use strict';

  angular
  .module('app.farmer')
  .controller('Account_settings', Account_settings);

  Account_settings.$inject = ['logger', 'viewContentLoaded'];

  /* @ngInject */
  function Account_settings(logger, viewContentLoaded) {
    var vm = this;
    //vm.add_inventory=add_inventory;

    // function add_inventory(){
    //   console.log('click');
    // }

  }
})();

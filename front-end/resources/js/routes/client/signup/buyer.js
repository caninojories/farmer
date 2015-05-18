(function() {
  'use strict';

  angular
    .module('app.signup')
    .controller('Buyer', Buyer);

    Buyer.$inject = ['$rootScope', 'commonsDataService'];

    /* @ngInject */
    function Buyer($rootScope, commonsDataService) {
      var vm = this;

      /*literals*/

      /*functions*/
      vm.register_buyer = register_buyer;

      // vm.firstName ;
      // vm.lastName ;
      // vm.email ;
      // vm.password ;
      // vm.companyName ;
      // vm.address ;
      // vm.city ;
      // vm.state ;
      // vm.zip ;
      // vm.phoneNum ;
      // vm.desc ;
      // vm.monthlyExpense ;
      // vm.businessType ;

      function register_buyer(){
        console.log('buyer')
      }

    }
}());

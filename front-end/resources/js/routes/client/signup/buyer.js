(function() {
  'use strict';

  angular
    .module('app.signup')
    .controller('Buyer', Buyer);

    Buyer.$inject = ['$rootScope', 'commonsDataService', '$q', 'signupServiceApi'];

    /* @ngInject */
    function Buyer($rootScope, commonsDataService, $q, signupServiceApi) {
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

      // function register_buyer(){
      //   console.log('buyer')
      // }

      function register_buyer(){
        $q.all([total_searchCallback()])
        .then(function(response){
          $rootScope.totalObj = response[0].data.total;
        }) ;
      }
      function total_searchCallback() {
        return commonsDataService
          .httpPOSTQueryParams('signup/buyer', {}, signupServiceApi)
          .then(function(response) {
            return response;
          });
      }


    }
}());

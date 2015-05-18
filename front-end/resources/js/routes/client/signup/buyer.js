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

      function register_buyer(){
        $q.all([total_searchCallback()])
        .then(function(response){
          console.log(response)
        }) ;
      }
      function total_searchCallback() {
        return commonsDataService
          .httpPOSTQueryParams('signup/buyer', {
            first_name : vm.first_name ,
            last_name : vm.last_name ,
            email : vm.email ,
            password : vm.password ,
            company_name : vm.company_name ,
            address : vm.address ,
            city : vm.city ,
            state : vm.state ,
            zip : vm.zip ,
            phone : vm.phone ,
            desc : vm.desc ,
            monthly_expense : vm.monthly_expense ,
            business_type : vm.business_type
          }, signupServiceApi)
          .then(function(response) {
            return response;
          });
      }


    }
}());

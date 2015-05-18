(function() {
  'use strict';

  angular
    .module('app.signup')
    .controller('Farmer', Farmer);

    Farmer.$inject = ['$rootScope', 'commonsDataService','$q','signupServiceApi'];

    /* @ngInject */
    function Farmer($rootScope, commonsDataService, $q,signupServiceApi) {
      var vm = this;

      /*literals*/

      /*functions*/
      vm.register_farmer=register_farmer;

      // vm.ffirst_name ;
      // vm.flast_name ;
      // vm.femail ;
      // vm.fpassword ;
      // vm.fcompany_name ;
      // vm.faddress ;
      // vm.fcity ;
      // vm.fstate ;
      // vm.fzip ;
      // vm.fphone ;
      // vm.fdescription ;
      // vm.ffarm_size ;

      function register_farmer(){
        console.log('farmer');
        $q.all([total_searchCallback()])
          .then(function(response) {
            console.log(response);
          });
      }
      function total_searchCallback() {
        return commonsDataService
          .httpPOSTQueryParams('signup/farmer', {
            first_name : vm.ffirst_name,
            last_name: vm.flast_name,
            email:vm.femail ,
            password:vm.fpassword ,
            company_name:vm.fcompany_name,
            address:vm.faddress ,
            city:vm.fcity ,
            state:vm.fstate ,
            zip:vm.fzip ,
            phone:vm.fphone ,
            description:vm.fdescription ,
            farm_size:vm.ffarm_size
          }, signupServiceApi)
          .then(function(response) {
            return response;
          });
      }

    }
}());

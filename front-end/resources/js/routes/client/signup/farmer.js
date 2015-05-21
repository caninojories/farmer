(function() {
  'use strict';

  angular
    .module('app.signup')
    .controller('Farmer', Farmer);

    Farmer.$inject = ['$rootScope', 'commonsDataService','$q', '$state', 'signupServiceApi'];

    /* @ngInject */
    function Farmer($rootScope, commonsDataService, $q, $state, signupServiceApi) {
      var vm = this;

      /*literals*/

      /*functions*/
      vm.register_farmer=register_farmer;

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
            $rootScope.signup_success = true;
            $state.go('signup')
          }).catch(function(error) {
            /*error*/
            console.log('error');
          });;
      }

    }
}());

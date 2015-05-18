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

      // vm.ffirstName ;
      // vm.flastName ;
      // vm.femail ;
      // vm.fpassword ;
      // vm.fcompanyName ;
      // vm.faddress ;
      // vm.fcity ;
      // vm.fstate ;
      // vm.fzip ;
      // vm.fphoneNum ;
      // vm.fdescription ;
      // vm.ffarmsize ;

      function register_farmer(){
        console.log('farmer');
        $q.all([total_searchCallback()])
          .then(function(response) {
            $rootScope.totalObj = response[0].data.total;
          });
      }
      function total_searchCallback() {
        return commonsDataService
          .httpPOSTQueryParams('signupfarmer', {
            firstName : vm.ffirstName,
            lastName: vm.flastName,
            email:vm.femail ,
            password:vm.fpassword ,
            compName:vm.fcompanyName,
            cddress:vm.faddress ,
            city:vm.fcity ,
            ctate:vm.fstate ,
            zip:vm.fzip ,
            phoneNum:vm.fphoneNum ,
            description:vm.fdescription ,
            farmsize:vm.ffarmsize 


          }, signupServiceApi)
          .then(function(response) {
            return response;
          });
      }

    }
}());

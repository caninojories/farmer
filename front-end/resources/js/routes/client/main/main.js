(function() {
  'use strict';

  angular
    .module('app.main')
    .controller('Main', Main);

    Main.$inject = ['$location', '$rootScope', '$state','$q',
    'commonsDataService', 'Restangular'];

    /* @ngInject */
    function Main($location, $rootScope, $state, $q, commonsDataService,
      Restangular) {
      var vm = this;

      vm.login = login;

      function login(){
        console.log("login called")
          $q.all([login_Callback()])
          .then(function(response){
            // console.log(response)
          }) ;
        }
        function login_Callback() {
          return commonsDataService
            .httpPOSTQueryParams('login/user', {
                email : vm.email,
                password : vm.password
            }, Restangular)
            .then(function(response) {
              return response;
            });
      }
    }
}());

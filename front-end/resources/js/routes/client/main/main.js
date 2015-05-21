(function() {
  'use strict';

  angular
    .module('app.main')
    .controller('Main', Main);

    Main.$inject = ['$location', '$rootScope', '$state','$q', '$auth',
    'commonsDataService', 'Restangular', 'userServiceApi'];

    /* @ngInject */
    function Main($location, $rootScope, $state, $q, $auth, commonsDataService,
      Restangular, userServiceApi) {
      var vm = this;

      vm.login = login;

      function login() {
        $auth.login({
          email: vm.email,
          password: vm.password
        }).then(function(response) {
          /*success*/
        }).catch(function(error) {
          /*error*/
          console.log('error');
        });
      }
    }
}());

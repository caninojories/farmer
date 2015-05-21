(function() {
  'use strict';

  angular
    .module('app.main')
    .controller('Main', Main);

    Main.$inject = ['$location', '$rootScope', '$state','$q',
    'commonsDataService'];

    /* @ngInject */
    function Main($location, $rootScope, $state, commonsDataService,
      $q) {
      var vm = this;

      vm.login = login;


      // function login(){
      //   $q.all([login_Callback()])
      //   .then(function(response){
      //     // console.log(response)
      //   }) ;
      // }
      // function login_Callback() {
      //   return commonsDataService
      //     .httpPOSTQueryParams('signup/buyer', {
      //
      //     }, /* Service here*/)
      //     .then(function(response) {
      //       return response;
      //     });
      // }
      function login(){
        console.log("login called")
          $q.all([login_Callback()])
          .then(function(response){
            // console.log(response)
          }) ;
        }
        function login_Callback() {
          return commonsDataService
            .httpPOSTQueryParams('signup/buyer', {

            }, /* Service here*/)
            .then(function(response) {
              return response;
            });
      }
    }
}());

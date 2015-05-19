(function() {
  'use strict';

  angular
    .module('app.main')
    .controller('Main', Main);

    Main.$inject = ['$rootScope', 'commonsDataService'/*, '$q'*/];

    /* @ngInject */
    function Main($rootScope, commonsDataService ) {/*commonsDataService, $q*/
      var vm = this;


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
      }
      function register(){
        console.log("register")
      }
    }
}());

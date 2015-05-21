(function() {
  'use strict';

  angular
    .module('app.signup')
    .controller('Signup', Signup);

    Signup.$inject = ['$rootScope'];

    /* @ngInject */
    function Signup($rootScope) {
      var vm = this;

      // $rootScope.signup_success ;
      //
      // if (signup_success == true) {
      //   strapModal.show('am-fade-and-scale', 'center', 'commons/modalWindow.html');
      // }
    }
}());

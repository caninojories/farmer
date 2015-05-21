(function() {
  'use strict';

  angular
    .module('app.signup')
    .controller('Signup', Signup);

    Signup.$inject = ['$rootScope', 'strapModal'];

    / @ngInject /
    function Signup($rootScope, strapModal) {
      var vm = this;

      if ($rootScope.signup_success === true) {
        strapModal.show('am-fade-and-scale', 'center', 'commons/modalWindow.html');
      }
    }
}());

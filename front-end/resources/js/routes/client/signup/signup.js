(function() {
  'use strict';

  angular
    .module('app.signup')
    .controller('Signup', Signup);

    Signup.$inject = ['$rootScope', 'strapModal'];

<<<<<<< HEAD
    / @ngInject /
    function Signup($rootScope, strapModal) {
      var vm = this;

=======
    /* @ngInject */
    function Signup($rootScope, strapModal) {
      var vm = this;
      
>>>>>>> d279c69adaee1f6f1eeb5026e601ac02f81eb16b
      if ($rootScope.signup_success === true) {
        strapModal.show('am-fade-and-scale', 'center', 'commons/modalWindow.html');
      }
    }
}());

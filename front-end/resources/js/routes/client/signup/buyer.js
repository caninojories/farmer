(function() {
  'use strict';

  angular
    .module('app.signup')
    .controller('Buyer', Buyer);

    Buyer.$inject = ['$rootScope', 'commonsDataService'];

    /* @ngInject */
    function Buyer($rootScope, commonsDataService) {
      var vm = this;

    }
}());

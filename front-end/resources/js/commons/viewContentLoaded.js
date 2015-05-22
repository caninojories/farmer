(function() {
  'use strict';

  angular
    .module('app.commons')
    .factory('viewContentLoaded', viewContentLoaded);

    viewContentLoaded.$inject = ['$rootScope', 'logger'];

    function viewContentLoaded ($rootScope, logger) {
      /***
      ** Sample external jquery call
      ***/
      return {
        date_picker : function loadScript() {
          $rootScope.$on('$viewContentLoaded', function() {
            jcaLayout.date_picker();
          });
        },
        carouselScript : function carouselScript() {
          $rootScope.$on('$viewContentLoaded', function() {
            jcaLayout.carousel();
          });
        }
      };
    }
})();

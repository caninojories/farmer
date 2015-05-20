(function() {
  'use strict';

  angular
    .module('app.widgets')
    .directive('toggleNav', toggleNav);

    function toggleNav() {
      var directive = {
        restrict: 'C',
        link    : link
      };

      return directive;

      function link(scope, element, attrs) {
        element.on('click', function() {
          toggleNavi();
        });
      }

      /*========================================
      =            CUSTOM FUNCTIONS            =
      ========================================*/
      function toggleNavi() {
        if ($('#site-wrapper').hasClass('show-nav')) {
          // Do things on Nav Close
          $('#site-wrapper').removeClass('show-nav');
        } else {
          // Do things on Nav Open
          $('#site-wrapper').addClass('show-nav');
        }
      }
    }
}());

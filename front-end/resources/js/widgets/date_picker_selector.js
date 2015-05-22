(function() {
  'use strict';

  angular
    .module('app.widgets')
    .directive('datePickerSelector', datePickerSelector);

    datePickerSelector.$inject = ['$rootScope'];

    function datePickerSelector($rootScope) {
      var directive = {
        restrict: 'A',
        link    : link
      };

      return directive;

      function link(scope, element, attrs) {
        var someDate = new Date();
        var today = new Date();
        var numberOfDaysToAdd = 14;
        someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
        var n=someDate.getDay();
        var mxDate;
        var mxDays;
        if( n===4 || n===3||n===2||n===1){
          mxDate = today.getDate() + 14;
          mxDays = 14;
        } else {
          mxDate = today.getDate() + 15;
          mxDays=15;
        }
        element.multiDatesPicker({
          minDate: 0,
          maxDate: mxDays,
          addDisabledDates: [ today.setDate(mxDate)],
          beforeShowDay: $.datepicker.noWeekends,
        });
      }
    }
}());

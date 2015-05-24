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
        scope.highlightDays = [];

        var today = moment().format('D');
        console.log(today);
        for (var i = 1; i < today; i++) {
          scope.highlightDays.push({date: moment().date(i).valueOf(), selectable: false});
        }

        /*add 14 days*/
        /*before adding 14 days*/
        /*check if the 14th day is monday-thursday*/
        /*2, 3, 4, 5*/
        var shipping_date = moment().date(today + 14).valueOf();
        var day = moment(shipping_date).format('d');
        day = parseInt(day);
        var default_days_of_shipping = 14;
        if (day === 2 || day === 3 || day === 4 || day === 5) {
          default_days_of_shipping -= 1;
        }
        scope.highlightDays.push({date: moment().date(default_days_of_shipping).valueOf(), selectable: false});


        // var someDate = new Date();
        // var today = new Date();
        // var numberOfDaysToAdd = 14;
        // someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
        // var n=someDate.getDay();
        // var mxDate;
        // var mxDays;
        // if( n===4 || n===3||n===2||n===1){
        //   mxDate = today.getDate() + 14;
        //   mxDays = 14;
        // } else {
        //   mxDate = today.getDate() + 15;
        //   mxDays=15;
        // }
        // element.multiDatesPicker({
        //   minDate: 0,
        //   maxDate: mxDays,
        //   addDisabledDates: [ today.setDate(mxDate)],
        //   beforeShowDay: $.datepicker.noWeekends,
        // });
      }
    }
}());

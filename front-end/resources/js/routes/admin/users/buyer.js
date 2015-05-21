(function() {
  'use strict';

  angular
    .module('app.admin_users')
    .controller('User_Buyer', User_Buyer);

    User_Buyer.$inject = ['$compile', '$scope', '$window', 'DTOptionsBuilder', 'DTColumnBuilder',
    'DTInstances'];

    /*@ngInject*/
    function User_Buyer($compile, $scope, $window, DTOptionsBuilder, DTColumnBuilder, DTInstances) {
      var vm = this;
      console.log('buyer');
      $scope.dtOptions = DTOptionsBuilder
        .fromSource($window.location.origin + '/admin_users_Api/buyer/list')
        .withTableTools('/js/vendor/table-tools/swf/copy_csv_xls_pdf.swf')
          .withOption('createdRow', function(row, data, dataIndex) {
            // Recompiling so we can bind Angular directive to the DT
            $compile(angular.element(row).contents())($scope);
          });

        $scope.dtColumns = [
          DTColumnBuilder.newColumn(null).withTitle('Actions').notSortable()
          .renderWith(function(data, type, full, meta) {
            return '<select select-approved-users-buyer=' + data.status + ' data-toggle="select"' +
            'class="form-control select select-primary select-xs" data-id=' + data._id.toString() + '>' +
              '<option value="Approved">Approved</option>' +
              '<option value="Pending">Pending</option>' +
            '</select>';

          }),
          DTColumnBuilder.newColumn('email').withTitle('Email').notSortable(),
          DTColumnBuilder.newColumn('company_name').withTitle('Company Name').notSortable()
        ];
    }
}());

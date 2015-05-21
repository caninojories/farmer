(function() {
  'use strict';

  angular
    .module('app.admin_main')
    .run(appRun);

    appRun.$inject = ['routehelper'];
    function appRun(routehelper) {
      routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
      return [{
        state: 'admin_users',
        config: {
          url: '/admin/users',
          templateUrl: '/admin/users/index.html',
          controller: 'Users as vm',
          title: 'Admin Users'
        }
      }, {
        state: 'admin_users_farmer',
        config: {
          url: '/admin/user/farmer',
          templateUrl: '/admin/users/farmer.html',
          controller: 'User_Farmer as vm',
          title: 'Farmer User'
        }
      }, {
        state: 'admin_users_buyer',
        config: {
          url: '/admin/user/buyer',
          templateUrl: '/admin/users/buyer.html',
          controller: 'User_Buyer as vm',
          title: 'Buyer User'
        }
      }];
    }
}());

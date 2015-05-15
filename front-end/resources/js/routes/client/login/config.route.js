(function() {
  'use strict';

  angular
    .module('app.login')
    .run(appRun);

    appRun.$inject = ['routehelper'];
    function appRun(routehelper) {
      routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
      return [{
        state: 'farmer',
        config: {
          url: '/signup/farmer',
          templateUrl: '/client/login/farmer.html',
          controller: 'Farmer as vm',
          title: 'Farmer'
        }
      }, {
          state: 'buyer',
          config: {
            url: '/signup/buyer',
            templateUrl: '/client/login/buyer.html',
            controller: 'Buyer as vm',
            title: 'Buyer'
          }
      }];
    }
}());

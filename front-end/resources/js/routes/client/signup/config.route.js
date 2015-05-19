(function() {
  'use strict';

  angular
    .module('app.signup')
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
          templateUrl: '/client/signup/farmer.html',
          controller: 'Farmer as vm',
          title: 'Farmer'
        }
      }, {
          state: 'buyer',
          config: {
            url: '/signup/buyer',
            templateUrl: '/client/signup/buyer.html',
            controller: 'Buyer as vm',
            title: 'Buyer'
          }
      }, {
          state: 'signup',
          config: {
            url: '/signup/account_signup',
            templateUrl: '/client/signup/account_signup.html',
            title: 'Signup'
          }
      }];
    }
}());

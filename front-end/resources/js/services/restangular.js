(function() {
  'use strict';

  angular.module('app.services', [])
  /*ngInject*/
  .factory('signupServiceApi', ['Restangular', function (Restangular) {
    return Restangular.all('signupApi');
  }])
  /*ngInject*/
  .factory('userInfoServiceApi', ['Restangular', function (Restangular) {
    return Restangular.all('userInfoApi');
  }]);
}());

(function() {
  'use strict';

  angular.module('app.services', [])
  /*ngInject*/
  .factory('signupServiceApi', ['Restangular', function (Restangular) {
    return Restangular.all('signupApi');
  }])
  /*ngInject*/
  .factory('userServiceApi', ['Restangular', function (Restangular) {
    return Restangular.all('userApi');
  }])
  /*ngInject*/
  .factory('userInfoServiceApi', ['Restangular', function (Restangular) {
    return Restangular.all('userInfoApi');
  }])
  .factory('admin_users_service_api', ['Restangular', function (Restangular) {
    return Restangular.all('admin_users_Api');
  }]);
}());

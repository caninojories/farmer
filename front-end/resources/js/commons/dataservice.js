(function() {
  'use strict';

  angular
    .module('app.commons')
    .factory('commonsDataService', commonsDataService);

    commonsDataService.$inject = ['authToken',  'exception', 'Restangular', 'userInfoServiceApi'];

    /* @ngInject */
    function commonsDataService(authToken, exception, Restangular, userInfoServiceApi) {
      var service = {
        httpGETQueryParams    : httpGETQueryParams,
        httpPOSTQueryParams   : httpPOSTQueryParams,
        httpPUTRouteParams    : httpPUTRouteParams,
        authorize : authorize,
        checkEmail: checkEmail
      };
      return service;

      function httpGETQueryParams(api, queryParam, apiService) {
        return apiService.one(api)
          .get(queryParam)
          .then(httpGETQueryParamsCallback)
          .catch(function(message) {

          });

        function httpGETQueryParamsCallback(response, status, header, config) {
          return Restangular.stripRestangular(response);
        }
      }

      function httpPOSTQueryParams(api, param, apiService) {
        return apiService.all(api)
          .post(param)
          .then(httpPOSTQueryParamsCallback)
          .catch(function(message) {
            /***
            ** Call the exception factory to show the error in the client for Development
            ** then wait for 5 seconds then redirect
            ***/
            exception.catcher('Error in saving the Farmers Data', message);
          });

        function httpPOSTQueryParamsCallback(response, status, header, config) {
          return Restangular.stripRestangular(response);
        }
      }
      
      function httpPUTRouteParams(api, routeUrl, param, apiService) {
        return apiService.one(api, routeUrl)
          .put(param)
          .then(httpPUTRouteParamsCallback)
          .catch(function(message) {

          });

          function httpPUTRouteParamsCallback(response, status, header, config) {
            return Restangular.stripRestangular(response);
          }
      }

      function authorize() {
        var token = authToken.getToken();
        return userInfoServiceApi.one('userInfo')
          .get({token:token})
          .then(authorizeCallBack)
          .catch(function(message) {

          });

        function authorizeCallBack(response, status, header, config) {
          return Restangular.stripRestangular(response);
        }
      }

      function checkEmail(api, param) {
        return userInfoServiceApi.one(api)
          .get(param)
          .then(checkEmailCallBack)
          .catch(function(message) {
            /***
            ** Call the exception factory to show the error in the client for Development
            ** then wait for 5 seconds then redirect
            ***/
            exception.catcher('Error in checking email name on all the list of User Data',
              message);
          });

        function checkEmailCallBack(response, status, header, config) {
          return response;
        }
      }
    }
})();

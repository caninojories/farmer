(function() {
  'use strict';



  module.exports = function(app, io) {
    var routes_api_client = io.rootPath + 'back-end/api_use/client/';
    var routes_api_admin = io.rootPath + 'back-end/api_use/admin/';

    var use_api_client = {
      login   : require(routes_api_client + 'login'),
      register: require(routes_api_client + 'register'),
      signup  : require(routes_api_client + 'signup'),
      user    : require(routes_api_client + 'user')
    };

    var use_api_admin = {
      farmer  : require(routes_api_admin + 'farmer'),
      buyer   : require(routes_api_admin + 'buyer')
    };

    return useApi([{
      name: '/userApi',
      url: use_api_client.register
    }, {
      name: '/userApi',
      url: use_api_client.login
    }, {
      name: '/userApi',
      url: use_api_client.user
    }, {
      name: '/signupApi',
      url: use_api_client.signup
    }, {
      name: '/admin_users_Api',
      url: use_api_admin.farmer
    }, {
      name: '/admin_users_Api',
      url: use_api_admin.buyer
    }]);

    function useApi(param) {
      for (var key in param) {
       if (param.hasOwnProperty(key)) {
          var obj = param[key];
          app.use(obj.name, obj.url);
        }
      }
    }
  };

}());

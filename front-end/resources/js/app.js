 (function() {
    'use strict';

    angular.module('ngAPI', [
        /*
         * Order is not important. Angular makes a
         * pass to register all of the modules listed
         * and then when app.dashboard tries to use app.data,
         * it's components are available.
         */

        /*
         * Everybody has access to these.
         * We could place these under every feature area,
         * but this is easier to maintain.
         */
        'app.core',
        //'app.widgets',

        /*
         * Feature areas
         */
        //'app.avengers',
        'app.main',
        'app.marketplace',
        'app.signup',
        'app.sample',
        'app.farmer',

        /*admin*/
        'app.admin_main',
        'app.admin_users'
    ]);
})();

(function() {
    'use strict';

    var configuration = function($stateProvider, $locationProvider, $urlRouterProvider) {

        $stateProvider.state('home', {
            url: '/',
            templateUrl: 'app/shell/shell.html',
            controller: 'ShellController as vm'
        })

        .state('profile', {
            url: '/profile',
            templateUrl: 'app/shell/shell.html',
            controller: 'ShellController as vm'
        })

        .state('search', {
            url: '/search',
            templateUrl: 'app/shell/shell.html',
            controller: 'ShellController as vm'
        });

        $locationProvider.html5Mode(true);

    };

    angular
        .module('fixDesignApp', ['ui.router'])
        .config(['$stateProvider', '$locationProvider', configuration]);

})();
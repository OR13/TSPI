/// <reference path="reference.ts" />

module TSPI {
    'use strict';

    angular.module('TSPI', [
        'ngAnimate',
        'ngCookies',
        'ngTouch',
        'ngSanitize',
        'ngResource',
        'ui.router',
        'ui.bootstrap',
        'ui.sortable',
        'firebase'

    ])
        .controller(TSPI.Controllers)
        .directive(TSPI.Directives)
        .controller('NavbarCtrl', NavbarCtrl)
        .controller('DeveloperFeaturesController', DeveloperFeaturesController)
        .controller('DemoController', DemoController)
        .config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function ($locationProvider: ng.ILocationProvider, $stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {

            $locationProvider.html5Mode(true);

            $stateProvider
                .state('typescript', {
                    url: '/typescript',
                    templateUrl: 'app/demo/demo.html',
                    controller: 'DemoController'
                });


            $stateProvider
                .state('developer-features', {
                    url: '/developer-features',
                    templateUrl: 'app/developer-features/developer-features.html',
                    controller: 'DeveloperFeaturesController'
                });

            $urlRouterProvider.otherwise('/typescript');

        }]);
}

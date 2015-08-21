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
        'ui.ace',
        'firebase'
    ])
        .controller(TSPI.Controllers)
        .directive(TSPI.Directives)
        .config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
            function ($locationProvider:ng.ILocationProvider,
                      $stateProvider:ng.ui.IStateProvider,
                      $urlRouterProvider:ng.ui.IUrlRouterProvider) {

                $locationProvider.html5Mode(true);

                $stateProvider
                    .state('interview', {
                        url: '/interview',
                        templateUrl: 'app/interview/interview.html',
                        controller: 'InterviewController',
                        controllerAs: 'InterviewController',

                    });

                $urlRouterProvider.otherwise('/interview');

            }]);
}

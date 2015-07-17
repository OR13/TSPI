/// <reference path="reference.ts" />

module ALTGC {
    'use strict';

    angular.module('ALTGC', [
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
        .controller(ALTGC.Controllers)
        .directive(ALTGC.Directives)
        .controller('NavbarCtrl', NavbarCtrl)
        .controller('DeveloperFeaturesController', DeveloperFeaturesController)
        .controller('DemoController', DemoController)
        // .directive('flEducationLink', EducationLinkTaskDirective.factory())
        // .directive('flNumericFloat', NumericFloatTaskDirective.factory())
        // .directive('flNumericFloatSelectOne', NumericFloatSelectOneTaskDirective.factory())
        .config(function ($locationProvider: ng.ILocationProvider, $stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {

            $locationProvider.html5Mode(true);


            $stateProvider
                .state('demo', {
                    url: '/',
                    templateUrl: 'app/demo/demo.html',
                    controller: 'DemoController'
                });


            $stateProvider
                .state('developer-features', {
                    url: '/developer-features',
                    templateUrl: 'app/developer-features/developer-features.html',
                    controller: 'DeveloperFeaturesController'
                });

            $urlRouterProvider.otherwise('/');

        });



}

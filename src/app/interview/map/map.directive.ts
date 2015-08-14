/// <reference path="../../reference.ts" />

module TSPI.Directives {
    'use strict';

    export function tspMap(): ng.IDirective {
        return {
            restrict: 'E',
            scope: {
                map: '='
            },
            controller: Controllers.MapController,
            controllerAs: 'vm',
            templateUrl: 'app/interview/map/map.partial.html',
            replace: true
        };
    }
}
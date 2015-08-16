/// <reference path="../../reference.ts" />

module TSPI.Directives {
    'use strict';

    export function tspiSim(): ng.IDirective {
        return {
            restrict: 'E',
            scope: false, // use controller scope
            controller: TSPI.Controllers.TSPISimController,
            controllerAs: 'SimController',
            bindToController: true
        };
    }
}

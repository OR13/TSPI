/// <reference path="../../../reference.ts" />

module TSPI.Controllers {
    'use strict';

    export interface ITSPIMapScope extends ng.IScope {
        interviewSim: TSPISim;
        ui: any;
    }

    export class TSPIMapController {

        static $inject = [
            '$scope'
        ];

        public map:TSPIMap;

        constructor($scope: ITSPIMapScope) {
            console.info('Map Controller: ', $scope);
        }

    }
}

/// <reference path="../../reference.ts" />

module TSPI.Controllers {
    'use strict';

    export class TSPISimController {

        static $inject = [
            '$scope'
        ];

        public $scope: IInterviewScope;

        constructor($scope: IInterviewScope) {
            this.$scope = $scope;
            //console.info('Sim Controller: ', this);
            //
            this.$scope.$watch('interviewSim.shortestPath', function(newVal, oldVal){
                console.log('shortest path changed', newVal, oldVal);
            }, true);
            //
            //this.$scope.$watch('interviewSim.map', function(newVal, oldVal){
            //    console.log('map changed', newVal, oldVal);
            //}, true);
        }

        public run = () => {
            this.$scope.interviewSim.run();
        };

        public reload = () => {
            this.$scope.interviewSim.reload();
        };

    }

}

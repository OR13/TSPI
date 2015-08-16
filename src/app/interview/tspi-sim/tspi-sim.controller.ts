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
            console.info('Sim Controller: ', this);
        }

        public run = () => {
            this.$scope.interviewSim.run();
        };

        public reload = () => {
            this.$scope.interviewSim.reload();
        };

    }

}

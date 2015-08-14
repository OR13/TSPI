/// <reference path="../reference.ts" />

module TSPI {
    'use strict';

    interface IDemoScope extends ng.IScope {
        draggableObjects: Array<Object>;
        sortableOptions: Object;
    }

    export class DemoController {
        /* @ngInject */
        constructor($scope: IDemoScope) {

            $scope.sortableOptions = {

            };

            $scope.draggableObjects = [

                {
                    name: 'Demo Item 1'
                },
                {
                    name: 'Demo Item 2'
                },
                {
                    name: 'Demo Item 3'
                },
                {
                    name: 'Demo Item 4'
                },
                {
                    name: 'Demo Item 5'
                }

            ];


        }

    }
}

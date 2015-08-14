/// <reference path="../../../reference.ts" />


module ALTGC.Directives {
    'use strict';

    export interface IDemoItemScope {
        item: DemoItem;
    }

    export function altgcDemoItem(): ng.IDirective {
        return {
            restrict: 'E',
            scope: {
                item: '='
            },
            controller: Controllers.DemoItemController,
            controllerAs: 'vm',
            templateUrl: 'app/demo/demo-items/demo-item/demo-item.partial.html',
            replace: true
        };
    }
}

/// <reference path="../../../reference.ts" />

module ALTGC.Controllers {
    'use strict';

    export class DemoItemController {

        static $inject = [
            '$scope'
        ];

        public item: DemoItem;

        constructor(isolateScope: Directives.IDemoItemScope) {
            this.item = isolateScope.item;

        }

        debug() {
            console.log('lol DEBUG');
        }

    }
}

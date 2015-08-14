/// <reference path="../../../reference.ts" />

module TSPI.Controllers {
    'use strict';

    export class DemoItemController {

        static $inject = [
            '$scope'
        ];

        public item: DemoItem;

        constructor(isolateScope: Directives.IDemoItemScope) {
            this.item = isolateScope.item;
            this.item.count = 0;
        }

        count() {
           this.item.count += 1;
        }

    }
}

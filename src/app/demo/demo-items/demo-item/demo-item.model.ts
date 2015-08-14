module TSPI {
    'use strict';

    export class DemoItem {

        public name: string;
        public count: number;
        public priority: number;
        public isComplete: boolean;

        constructor(name: string = 'default', isComplete: boolean = false) {
            this.count = 0;
        }
    }
}

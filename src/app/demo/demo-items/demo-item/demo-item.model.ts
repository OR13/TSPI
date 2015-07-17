module ALTGC {
    'use strict';

    export class DemoItem {

        public name: string;
        public description: string;
        public priority: number;
        public isComplete: boolean;

        constructor(name: string = 'default', isComplete: boolean = false) {
            this.name = 'harold';
        }
    }
}

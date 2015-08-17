/// <reference path="../../reference.ts" />

module TSPI {
    'use strict';

    export class TSPISim {
        public salesman: TSPISalesman;
        public map:TSPIMap;
        public iteration:number;
        public maxInterations:number;

        constructor() {
            this.map = new TSPIMap();
            this.iteration = 0;
            this.maxInterations = 5;
            console.info('Constructed: ', this);
        }

        run() {
            this.salesman = new TSPISalesman();
            this.salesman.getPathToAllCities(this.map);
            console.info('Run Sim: ', this);
        }

        reload() {
            this.map = new TSPIMap();
            this.iteration = 0;
            this.maxInterations = 5;
            console.info('Reloaded: ', this);
        }

    }
}

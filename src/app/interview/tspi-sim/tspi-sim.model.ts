/// <reference path="../../reference.ts" />

module TSPI {
    'use strict';

    export class TSPISim {
        public salesman: TSPISalesman;
        public map:TSPIMap;
        public shortestCircuit:number;
        public iteration:number;

        constructor() {
            this.map = new TSPIMap();
            this.salesman = new TSPISalesman();
            this.salesman.getPathToAllCities(this.map);
            this.shortestCircuit = 0;
            this.iteration = 0;
            console.info('Constructed: ', this);
        }

        run() {
            console.info('Run Sim: ');
        }

        reload() {
            this.map = new TSPIMap();
            this.shortestCircuit = 0;
            this.iteration = 0;
            console.info('Reloaded: ', this);
        }

    }
}

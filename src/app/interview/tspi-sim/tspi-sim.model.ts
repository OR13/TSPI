/// <reference path="../../reference.ts" />

module TSPI {
    'use strict';

    export class TSPISim {
        public salesman:TSPISalesman;
        public map:TSPIMap;
        public iteration:number;
        public maxInterations:number;
        public shortestPath:number;

        constructor() {
            this.map = new TSPIMap();
            this.iteration = 0;
            this.maxInterations = 100;
            this.shortestPath = null;
            console.info('Constructed: ', this);
        }

        run() {

            this.iteration = 0;

            console.info('Run Sim: ', this);

            while (this.iteration < this.maxInterations) {

                this.salesman = new TSPISalesman();
                this.salesman.getPathToAllCities(this.map, this.iteration);

                if (this.salesman.currentPathDistance < this.shortestPath || this.shortestPath === null) {
                    console.log('New Shortest Path: ', this.salesman.currentPathDistance);
                    this.shortestPath = this.salesman.currentPathDistance;
                    this.salesman.rankCities();
                }
                this.iteration++;
            }
        }

        reload() {
            this.map = new TSPIMap();
            this.iteration = 0;
            this.maxInterations = 5;
            console.info('Reloaded: ', this);
        }

    }
}

/// <reference path="../../reference.ts" />

module TSPI {
    'use strict';

    export class TSPISim {
        public salesman:TSPISalesman;
        public map:TSPIMap;
        public iteration:number;
        public maxInterations:number;
        public shortestPathDistance:number;
        public shortestPath:TSPIPath;
        public shortestPaths:Array<TSPIPath>;

        private runIterations = ():void => {

            //console.log(this.iteration);

            if (this.iteration >= this.maxInterations) {
                //console.info('Done: ', this);
                return;
            }

            this.salesman = new TSPISalesman();
            this.salesman.getPathToAllCities(this.map, this.iteration);

            //console.log('Iteration: ', this.iteration, this.shortestPathDistance, this.salesman.currentPathDistance);

            if ( this.salesman.currentPathDistance < this.shortestPathDistance || this.shortestPathDistance == -1) {
                //console.log('Iteration: ', this.iteration, this.shortestPathDistance, this.salesman.currentPathDistance);

                this.shortestPath = new TSPIPath(this.salesman.currentPath, this.salesman.currentPathDistance, this.iteration);
                this.shortestPathDistance = this.shortestPath.distance;
                this.shortestPaths.push(this.shortestPath);
                this.map.paths.push(this.shortestPath);
                this.salesman.rankCities();
            }

            this.iteration++;

            setTimeout(this.runIterations, 1);
        };


        constructor() {
            this.map = new TSPIMap();
            this.iteration = 0;
            this.maxInterations = 1000;
            this.shortestPathDistance = -1;
            this.shortestPath = null;
            this.shortestPaths = [];
            //console.info('Constructed: ', this);
        }

        run() {
            this.iteration = 0;
            //console.info('Run Sim: ', this);
            this.runIterations();
        }

        reload() {

            this.map = new TSPIMap();
            this.iteration = 0;
            this.maxInterations = 100;
            this.shortestPathDistance = -1;
            this.shortestPath = null;
            this.shortestPaths = [];
            //console.info('Reloaded: ', this);
        }


    }
}

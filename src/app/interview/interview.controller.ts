/// <reference path="../reference.ts" />

module TSPI.Controllers {
    'use strict';


    export class InterviewController {
        public aceOptions:Object;
        public aceModel:String;
        public scope:any;
        public salesman:TSPISalesman;
        public map:TSPIMap;
        public iterationsPerSecond:number;
        public iteration:number;
        public maxIterations:number;
        public shortestPathDistance:number;
        public shortestPath:TSPIPath;
        public shortestPaths:Array<TSPIPath>;
        public selectedPath:TSPIPath;
        public numCities:number;


        public run = () => {
            console.log('running ', this);
            this.iteration = 0;

            eval(this.aceModel.toString());

            // console.log('compile is it there now', window['scoreCity']);

            this.runIterations();
        };

        public selectPath = (path:TSPIPath) => {
            this.selectedPath = path;
        };

        public isActivePath = (path:TSPIPath) => {
            return this.selectedPath === path;

        };

        public reload = () => {
            console.log('reloading ', this);
            this.iteration = 0;
            this.shortestPathDistance = -1;
            this.shortestPath = null;
            this.shortestPaths = [];
            this.map = new TSPIMap(this.numCities);

        };

        private runIterations = ():void => {

            // console.log(this.iteration);

            if (this.iteration >= this.maxIterations) {
                console.info('Done: ', this);
                return;
            }

            this.salesman = new TSPISalesman();
            this.salesman.getPathToAllCities(this.map, this.iteration);

            // console.log('Iteration: ', this.iteration, this.shortestPathDistance, this.salesman.currentPathDistance);

            if (this.salesman.currentPathDistance < this.shortestPathDistance || this.shortestPathDistance === -1) {
                // console.log('Iteration: ', this.iteration, this.shortestPathDistance, this.salesman.currentPathDistance);
                this.shortestPath = new TSPIPath(this.salesman.currentPath, this.salesman.currentPathDistance, this.iteration);
                this.selectedPath = this.shortestPath;
                this.shortestPathDistance = this.shortestPath.distance;
                this.shortestPaths.push(this.shortestPath);
                this.salesman.rankEdgeMapCities(this.shortestPath);
            }

            this.iteration++;
            this.scope.safeApply();

            setTimeout(this.runIterations, 1000 / this.iterationsPerSecond);
        };


        /* @ngInject */
        constructor($scope:any) {

            this.iteration = 0;
            this.maxIterations = 1000;
            this.shortestPathDistance = -1;
            this.shortestPath = null;
            this.shortestPaths = [];
            this.iterationsPerSecond = 10;
            this.numCities = 10;
            this.map = new TSPIMap(this.numCities);
            this.scope = $scope;

            $scope.safeApply = function (fn:any) {
                var phase = this.$root.$$phase;
                if (phase === '$apply' || phase === '$digest') {
                    if (fn && (typeof(fn) === 'function')) {
                        fn();
                    }
                } else {
                    this.$apply(fn);
                }
            };

            this.aceOptions = {
                useWrapMode: true,
                showGutter: false,
                theme: 'chrome',
                mode: 'javascript',
                firstLineNumber: 5,
                onLoad: function (_editor:any) {
                    // options
                    _editor.setReadOnly(false);
                    _editor.$blockScrolling = Infinity;
                },
                onChange: function (e:any) {
                    // console.log('editor changed...', e);
                }
            };

            // initial code content...
            this.aceModel =
                `

// A salesmen always travels to the city with the highest score.
// Distance is the distance from the salesman's current city to the city being scored.
// Rank is 1 + the number of salesmen who have found a shortest path passing through the city being scored.
// Iteration is the number of salesmen who have tried to find a shortest path.

window.scoreCity = function(distance, rank, iteration){

    if (iteration === 0) {
        return 1 / distance;
    }

    var rand = Math.random();

    if (rand > .5) {
        return rank * (Math.random() * 20) / distance;
    } else {
        return (1 / distance) * rank;
    }

}

`;

        }


    }

}




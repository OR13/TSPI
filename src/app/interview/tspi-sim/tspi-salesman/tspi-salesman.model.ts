/// <reference path="../../../reference.ts" />

module TSPI {
    'use strict';

    export class TSPISalesman {

        public path:Array<City>;
        public pathDistance:number;
        public isWinner: boolean;

        constructor() {
            this.path = [];
            this.pathDistance = 0;
            this.isWinner = false;
        }

        getPathToAllCities(map:TSPIMap) {

            while (!this.hasVisitedAllCities(map)) {
                var nextCity = this.naiveChooseNextCity(map);
                this.travelToCity(nextCity);
            }

            return this.path;
        }

        travelToCity(destinationCity:City) {
            if (this.path.length === 0) {
                this.path.push(destinationCity);
                this.pathDistance = 0;
            } else {
                var distanceToDestination = this.getDistanceToCity(destinationCity);
                this.pathDistance += distanceToDestination;
                this.path.push(destinationCity);
            }
        }

        getDistanceToCity(destinationCity:City) {
            var currentCity = this.path[this.path.length - 1];
            var dx = destinationCity.x_axis - currentCity.x_axis;
            var dy = destinationCity.y_axis - currentCity.y_axis;
            var distance = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
            return distance;
        }

        hasVisitedAllCities(map:TSPIMap) {
            return this.path.length === map.cities.length + 1;
        }

        naiveChooseNextCity(map:TSPIMap):City {

            var self = this;

            if (self.path.length === 0) {
                return map.cities[0];
            }

            if (self.path.length === map.cities.length) {
                return map.cities[0];
            }

            return map.cities[self.path.length];
        }
    }
}

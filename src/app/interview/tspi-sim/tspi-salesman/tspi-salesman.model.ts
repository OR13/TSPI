/// <reference path="../../../reference.ts" />

module TSPI {
    'use strict';

    export class TSPISalesman {

        public path:Array<City>;
        public distance:number;

        constructor() {
            this.path = [];
            this.distance = 0;
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
                this.distance = 0;
            } else {
                var distanceToDestination = this.getDistanceToCity(destinationCity);
                this.distance += distanceToDestination;
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

            map.cities.forEach(function (city:City) {
                if (self.path.indexOf(city) === -1) {
                    return city;
                }
            });

            return self.path[0];
        }
    }
}

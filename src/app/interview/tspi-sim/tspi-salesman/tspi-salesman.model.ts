/// <reference path="../../../reference.ts" />

module TSPI {
    'use strict';

    export class TSPISalesman {

        public currentCity:City;
        public currentPath:Array<City>;
        public currentPathDistance:number;
        public remainingCities:Array<City>;
        public isWinner:boolean;

        constructor() {
            this.currentPath = [];
            this.currentPathDistance = 0;
            this.isWinner = false;
        }

        updateRemainingCitiesFrom(map:TSPIMap) {

            var self = this;

            this.remainingCities = _.filter(map.cities, function (city) {
                return !_.contains(self.currentPath, city);
            });

        }

        getPathToAllCities(map:TSPIMap, iteration:number) {

            this.travelToCity(map.cities[0]);

            this.updateRemainingCitiesFrom(map);

            while (this.remainingCities.length !== 0) {
                var nextCity = this.smartlyChooseNextCity(this.remainingCities, iteration);
                this.travelToCity(nextCity);
                this.updateRemainingCitiesFrom(map);
            }

            this.travelToCity(this.currentPath[0]);

            return this.currentPath;
        }

        travelToCity(destinationCity:City) {
            if (this.currentPath.length === 0) {
                this.currentPath.push(destinationCity);
                this.currentPathDistance = 0;
            } else {
                this.currentPathDistance += this.currentCity.getDistanceFrom(destinationCity);
                this.currentPath.push(destinationCity);
            }
            this.currentCity = this.currentPath[this.currentPath.length - 1];
        }

        rankCities() {

            this.currentPath.forEach(function (city:City) {
                city.promote();
            });
        }

        smartlyChooseNextCity(remainingCities:Array<City>, iteration:number):City {

            var self = this;

            var firstCity = remainingCities[0];
            var bestCityScore = this.scoreCityCandidate(firstCity, iteration);
            var bestCity = firstCity;

            remainingCities.forEach(function (nextCity:City) {
                var nextCityScore = self.scoreCityCandidate(nextCity, iteration);

                if (nextCityScore > bestCityScore) {
                    bestCity = nextCity;
                    bestCityScore = nextCityScore;
                }
            });

            return bestCity;
        }

        scoreCityCandidate(city:City, iteration:number):number {

            var self = this;

            var distance = city.getDistanceFrom(this.currentCity);

            if (iteration == 0) {
                return 1 / distance;
            }

            var rand = Math.random();

            if (rand > .5) {
                return city.rank * (Math.random() * 20) / distance;
            } else {
                return (1 / distance) * city.rank;
            }

        }

    }
}

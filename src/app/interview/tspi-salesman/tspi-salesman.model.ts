/// <reference path="../../reference.ts" />

module TSPI {
    'use strict';

    export class TSPISalesman {

        public currentCity:TSPICity;
        public currentPath:Array<TSPICity>;
        public currentPathDistance:number;
        public remainingCities:Array<TSPICity>;
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

            var firstCity =  map.cities[Math.floor(Math.random()*map.cities.length)];
            this.travelToCity(firstCity);

            this.updateRemainingCitiesFrom(map);

            while (this.remainingCities.length !== 0) {
                var nextCity = this.smartlyChooseNextCity(this.remainingCities, iteration);
                this.travelToCity(nextCity);
                this.updateRemainingCitiesFrom(map);
            }

            this.travelToCity(this.currentPath[0]);

            return this.currentPath;
        }

        travelToCity(destinationCity:TSPICity) {
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

            this.currentPath.forEach(function (city:TSPICity) {
                city.promote();
            });
        }

        smartlyChooseNextCity(remainingCities:Array<TSPICity>, iteration:number):TSPICity {

            var self = this;

            var firstCity =  remainingCities[Math.floor(Math.random()*remainingCities.length)];
            var bestCityScore = this.scoreCityCandidate(firstCity, iteration);
            var bestCity = firstCity;

            remainingCities.forEach(function (nextCity:TSPICity) {
                var nextCityScore = self.scoreCityCandidate(nextCity, iteration);

                if (nextCityScore > bestCityScore) {
                    bestCity = nextCity;
                    bestCityScore = nextCityScore;
                }
            });

            return bestCity;
        }

        scoreCityCandidate(city:TSPICity, iteration:number):number {
            var self = this;
            var distance = city.getDistanceFrom(this.currentCity);
            return window['scoreCity'](distance, city.rank, iteration);
        }

    }
}

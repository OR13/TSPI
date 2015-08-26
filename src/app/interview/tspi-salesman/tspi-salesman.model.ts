/// <reference path="../../reference.ts" />

module TSPI {
    'use strict';

    export class TSPISalesman {

        public currentCity:TSPICity;
        public currentPath:Array<TSPICity>;
        public currentPathDistance:number;
        public remainingCities:Array<TSPICity>;
        public map:TSPIMap;


        constructor() {
            this.currentPath = [];
            this.currentPathDistance = 0;
            this.map = null;
        }

        updateRemainingCitiesFrom(map:TSPIMap) {

            var self = this;

            if (self.map == null) {
                self.map = map;
            }

            this.remainingCities = _.filter(map.cities, function (city:TSPICity) {
                return !_.contains(self.currentPath, city);
            });

        }

        getPathToAllCities(map:TSPIMap, iteration:number) {

            var firstCity = map.cities[Math.floor(Math.random() * map.cities.length)];
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


        smartlyChooseNextCity(remainingCities:Array<TSPICity>, iteration:number):TSPICity {

            var self = this;

            var firstCity = remainingCities[Math.floor(Math.random() * remainingCities.length)];
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
            var edge = self.getOrCreateEdge(this.currentCity, city);
            /* tslint:disabled */
            var s = window['scoreCity'](edge.destination, edge.rank, iteration);
            /* tslint:enabled */
            return s;
        }

        public getOrCreateEdge(source:TSPICity, destination:TSPICity):TSPIEdge {

            var self = this;
            var edgeName = `${source.cityId}->${destination.cityId}`;
            var edge = self.map.edgeMap[edgeName];

            if (typeof edge === 'undefined') {
                edge = new TSPIEdge(
                    source,
                    destination,
                    source.getDistanceFrom(destination),
                    1
                );
            }
            self.map.edgeMap[edgeName] = edge;
            return edge;
        }

        public rankEdgeMapCities(path:TSPIPath):void {

            var self = this;

            for (var i = 0; i < path.cities.length - 1; i++) {
                var source = path.cities[i];
                var destination = path.cities[i + 1];
                var edgeName = `${source.cityId}->${destination.cityId}`;
                var edge = self.map.edgeMap[edgeName];
                if (typeof edge === 'undefined') {
                    edge = new TSPIEdge(
                        source,
                        destination,
                        source.getDistanceFrom(destination),
                        2
                    );
                } else {
                    edge.rank += 1;
                }
                self.map.edgeMap[edgeName] = edge;
            }
        }


    }
}

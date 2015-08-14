/// <reference path="../../reference.ts" />

module TSPI {
    'use strict';

    class Ant {
        public path:Array<City>;
        public distance:number;

        constructor() {
            this.path = [];
            this.distance = 0;
        }

        travelToCity(destinationCity:City) {
            if (this.path.length == 0) {
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

        hasVisitedAllCities(map: Map){
            return this.path.length == map.cities.length + 1;
        }

        naiveChooseNextCity(map: Map): City {
            for (var c in map.cities){
                var city = map.cities[c];
                if (this.path.indexOf(city) == -1){
                    return city;
                }
            }

            return this.path[0];

        }
    }

    export class Sim {

        public map:Map;
        public shortestCircuit:number;
        public iteration:number;

        constructor(map:Map) {
            this.map = map;
            this.shortestCircuit = 0;
            this.iteration = 0;

            var ant = new Ant();

            while( ! ant.hasVisitedAllCities(this.map) ){
                var nextCity = ant.naiveChooseNextCity(this.map);

                console.log("Ant chose next city ", nextCity);

                ant.travelToCity(nextCity);
            }


            console.log("Ant ", ant);

            this.map.drawPath(ant.path);


            //var heuristic = function (distance:number, edgeValue:number, passNumber:number) {
            //
            //};
            //
            //while (this.iteration < 5) {
            //
            //    console.log('i ', this.iteration);
            //
            //    var memory = {
            //        totalDistance: 0
            //    };
            //
            //    for (var i = 0; i < this.map.cities.length - 1; i++) {
            //
            //        memory.totalDistance += distance;
            //    }
            //
            //    console.log("memory: ", memory);
            //
            //    this.iteration++;
            //}
        }


    }
}
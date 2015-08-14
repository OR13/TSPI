
/// <reference path="../../reference.ts" />

module TSPI {
    'use strict';

    export class Map {

        public cities: Array<City>;
        public svgContainer: any;

        constructor(cities: Array<City> = []) {
            this.cities = cities;
        }

        drawPath (path: Array<City>){
            console.log('drawing path!!!!');

        }


    }
}
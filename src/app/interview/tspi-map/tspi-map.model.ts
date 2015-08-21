/// <reference path="../../reference.ts" />

module TSPI {
    'use strict';

    export class TSPIMap {

        public cities:Array<TSPICity>;

        constructor(numCities: number) {

            this.cities = [];

            var randomWithRange = function (min:number, max:number) {
                return (Math.random() * (max - min) + 1) + min;
            };

            var mapWidth = $('.tspi-map')[0].offsetWidth - 50;

            for (var cityId = 0; cityId < numCities; cityId++) {
                var city = new TSPICity(
                    cityId,
                    `City ${cityId}`,
                    'Its Description',
                    'black',
                    randomWithRange(9, mapWidth),
                    randomWithRange(8, 248)
                );

                this.cities.push(city);
            }


            //console.info('Constructed: ', this);
        }
    }
}

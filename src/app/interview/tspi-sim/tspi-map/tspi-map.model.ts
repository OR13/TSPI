/// <reference path="../../../reference.ts" />

module TSPI {
    'use strict';

    export class TSPIMap {

        public cities:Array<City>;

        constructor(cities:Array<City> = []) {
            this.cities = cities;

            if (cities.length === 0) {

                var randomWithRange = function (min:number, max:number) {
                    return (Math.random() * (max - min) + 1) + min;
                };

                var colors = ['purple', 'green', 'blue', 'red', 'orange', 'teal', 'yellow'];

                for (var cityId = 0; cityId < 8; cityId++) {
                    var city = new City(
                        cityId,
                        `City ${cityId}`,
                        'Its Description',
                        colors[Math.floor(Math.random() * colors.length)],
                        randomWithRange(128, 384),
                        randomWithRange(128, 384)
                    );

                    this.cities.push(city);
                }

            }
            console.info('Constructed: ', this);
        }
    }
}

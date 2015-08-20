/// <reference path="../../../reference.ts" />

module TSPI {
    'use strict';

    export class TSPIMap {

        public cities:Array<TSPICity>;
        public paths: Array<TSPIPath>;

        constructor(cities:Array<TSPICity> = []) {
            this.cities = cities;
            this.paths = [];

            if (cities.length === 0) {

                var randomWithRange = function (min:number, max:number) {
                    return (Math.random() * (max - min) + 1) + min;
                };

                for (var cityId = 0; cityId < 5; cityId++) {
                    var city = new TSPICity(
                        cityId,
                        `City ${cityId}`,
                        'Its Description',
                        'black',
                        randomWithRange(128, 384),
                        randomWithRange(128, 384)
                    );

                    this.cities.push(city);
                }

            }
            //console.info('Constructed: ', this);
        }
    }
}

module TSPI {
    'use strict';

    export class TSPIPath {
        public cities:Array<TSPICity>;
        public distance:number;
        public iteration:number;

        constructor(cities:Array<TSPICity> = [],
                    distance:number = -1,
                    iteration:number = 0) {
            this.cities = cities;
            this.distance = distance;
            this.iteration = iteration;
            //console.info('Constructed ' , this);
        }
    }
}

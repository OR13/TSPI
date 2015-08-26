module TSPI {
    'use strict';

    export class TSPIEdge {
        public source:TSPICity;
        public destination:TSPICity;
        public distance:number;
        public rank:number;

        constructor(_source: TSPICity,
                    _destination: TSPICity,
                    _distance:number = -1,
                    _rank:number = -1
                    ) {
            this.source = _source;
            this.destination = _destination;
            this.distance = _distance;
            this.rank = _rank;
        }
    }

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
            // console.info('Constructed ' , this);
        }
    }
}

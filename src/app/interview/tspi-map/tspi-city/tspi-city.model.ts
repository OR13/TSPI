module TSPI {
    'use strict';

    export class TSPICity {
        public cityId:number;
        public color:string;
        public x_axis:number;
        public y_axis:number;

        public getDistanceFrom = (city:TSPICity):number => {
            var dx = city.x_axis - this.x_axis;
            var dy = city.y_axis - this.y_axis;
            var distance = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
            return distance;
        };

        constructor(cityId:number = 0,
                    color:string = 'purple',
                    x_axis:number = 50,
                    y_axis:number = 50) {
            this.cityId = cityId;
            this.color = color;
            this.x_axis = x_axis;
            this.y_axis = y_axis;
        }
    }
}

module TSPI {
    'use strict';

    export class City {
        public cityId: number;
        public name: string;
        public description: string;
        public color: string;
        public x_axis: number;
        public y_axis: number;

        constructor (
            cityId: number = 0,
            name: string = 'default city',
            description: string = 'description',
            color: string = 'purple',
            x_axis: number = 50,
            y_axis: number = 50
        ) {
            this.cityId = cityId;
            this.name = name;
            this.description = description;
            this.color = color;
            this.x_axis = x_axis;
            this.y_axis = y_axis;
        }
    }
}

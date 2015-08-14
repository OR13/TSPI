
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
            console.log('drawing path!!!!', this.svgContainer);
            d3.select("#d3-container").append("svg").append("line")
                .style("stroke", "black")
                .attr("x1", 5)
                .attr("y1", 5)
                .attr("x2", 50)
                .attr("y2", 50);

        }


    }
}
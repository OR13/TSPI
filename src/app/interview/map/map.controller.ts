/// <reference path="../../reference.ts" />

module TSPI.Controllers {
    'use strict';

    export interface IMapScope {
        map: Map;
    }

    export class MapController {

        static $inject = [
            '$scope'
        ];

        public map:Map;

        constructor(isolateScope:Controllers.IMapScope) {

            //setTimeout(function () {

                isolateScope.map.svgContainer = d3.select("#d3-container").append("svg");

                isolateScope.map.svgContainer
                    .attr("width", 512)
                    .attr("height", 512)
                    .style("border", "1px solid black");

                var circles = isolateScope.map.svgContainer.selectAll("circle")
                    .data(isolateScope.map.cities)
                    .enter()
                    .append("circle");

                var circleAttributes = circles
                    .attr("cx", function (d:City) {
                        return d.x_axis;
                    })
                    .attr("cy", function (d:City) {
                        return d.y_axis;
                    })
                    .attr("r", function (d:City) {
                        return 10;
                    })
                    .style("fill", function (d:City) {
                        return d.color;
                    });

                console.log(isolateScope.map.svgContainer);

            //}, 500);

        }


    }
}
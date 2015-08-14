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

            var svgContainer = d3.select("#d3-container").append("svg");

            svgContainer
                .attr("width", 512)
                .attr("height", 512)
                .style("border", "1px solid black");

            var circles = svgContainer.selectAll("circle")
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

            svgContainer.append("line")
                .style("stroke", "black")
                .attr("x1", 5)
                .attr("y1", 5)
                .attr("x2", 100)
                .attr("y2", 100);

            console.log(svgContainer);

        }
    }
}
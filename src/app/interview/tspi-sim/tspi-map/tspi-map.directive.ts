/// <reference path="../../../reference.ts" />

module TSPI.Directives {
    'use strict';

    export function tspiMap():ng.IDirective {
        return {
            restrict: 'E',
            scope: false, // use controller scope
            controller: TSPI.Controllers.TSPIMapController,
            controllerAs: 'MapController',
            bindToController: true,
            template: '<div id="tspi-map-container"></div>',
            replace: true,
            link: function (scope:TSPI.Controllers.ITSPIMapScope, element:any, attrs:any) {

                scope.ui = {};
                scope.ui.svgContainer = d3.select('#tspi-map-container').append('svg');
                scope.ui.svgContainer
                    .attr('width', 512)
                    .attr('height', 512);

                scope.ui.drawCities = function () {
                    scope.ui.svgContainer.selectAll('circle').remove();
                    scope.ui.svgContainer.selectAll('circle')
                        .data(scope.interviewSim.map.cities)
                        .enter()
                        .append('circle')
                        .attr('cx', function (d:City) {
                            return d.x_axis;
                        })
                        .attr('cy', function (d:City) {
                            return d.y_axis;
                        })
                        .attr('r', function (d:City) {
                            return 10;
                        })
                        .style('fill', function (d:City) {
                            return d.color;
                        });
                };

                scope.ui.drawPaths = function () {
                    scope.ui.svgContainer.selectAll('line').remove();
                    scope.ui.svgContainer.append('line')
                        .style('stroke', 'black')
                        .attr('x1', 5)
                        .attr('y1', 5)
                        .attr('x2', 100)
                        .attr('y2', 100);
                };

                scope.$watch('interviewSim.map', function (map:TSPIMap) {
                    console.warn('Map Watcher: ', map);
                    scope.ui.drawCities();
                    scope.ui.drawPaths();
                });

                console.info('Map Linker: ', scope);
            }
        };
    }
}

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

                    scope.ui.svgContainer.selectAll('line').remove();
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

                scope.ui.drawPath = function (path: Array<City>) {

                    scope.ui.svgContainer.selectAll('line').remove();

                    for (var i = 0; i < path.length -1; i++){
                        var c1 = path[i];
                        var c2 = path[i+1];

                        scope.ui.svgContainer.append('line')
                            .style('stroke', 'black')
                            .attr('x1', c1.x_axis)
                            .attr('y1', c1.y_axis)
                            .attr('x2', c2.x_axis)
                            .attr('y2', c2.y_axis);
                    };

                };

                scope.$watch('interviewSim.map', function (map:TSPIMap) {
                    console.warn('Map Watcher: ', map);
                    scope.ui.drawCities();
                });

                scope.$watch('interviewSim.salesman.path', function (path: Array<City>) {
                    if (path !== undefined){
                        console.warn('Salesman Path Watcher: ', path);
                        scope.ui.drawPath(path);
                    }

                });

                console.info('Map Linker: ', scope);
            }
        };
    }
}

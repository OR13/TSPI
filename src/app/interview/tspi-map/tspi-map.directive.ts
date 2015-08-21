/// <reference path="../../reference.ts" />

module TSPI.Directives {
    'use strict';

    export function tspiMap():ng.IDirective {
        return {
            restrict: 'E',
            scope: true, // inherit controller scope
            template: '<div id="tspi-map-container"></div>',
            replace: true,
            link: function (scope: any, element:any, attrs:any) {

                var mapWidth = $('.tspi-map')[0].offsetWidth;

                scope.ui = {};
                scope.ui.svgContainer = d3.select('#tspi-map-container').append('svg');
                scope.ui.svgContainer
                    .attr('width', mapWidth)
                    .attr('height', 256);

                //scope.ui.color = d3.scale.linear()
                //    .domain([0, 1])
                //    .range(["red", "green"]);

                scope.ui.drawCities = function () {

                    scope.ui.svgContainer.selectAll('line').remove();
                    scope.ui.svgContainer.selectAll('circle').remove();

                    scope.ui.svgContainer.selectAll('circle')
                        .data(scope.$parent.InterviewController.map.cities)
                        .enter()
                        .append('circle')
                        .attr('cx', function (d:TSPICity) {
                            return d.x_axis;
                        })
                        .attr('cy', function (d:TSPICity) {
                            return d.y_axis;
                        })
                        .attr('r', function (d:TSPICity) {
                            return 5;
                        })
                        .style('fill', function (d:TSPICity) {
                            return d.color;
                        });
                };

                scope.ui.drawPath = function (path:Array<TSPICity>) {

                    scope.ui.svgContainer.selectAll('line').remove();

                    for (var i = 0; i < path.length - 1; i++) {
                        var c1 = path[i];
                        var c2 = path[i + 1];

                        scope.ui.svgContainer.append('line')
                            .style('stroke', 'black')
                            .attr('x1', c1.x_axis)
                            .attr('y1', c1.y_axis)
                            .attr('x2', c2.x_axis)
                            .attr('y2', c2.y_axis);
                    };

                };

                //console.log('what to watch ', scope.$parent)

                scope.$parent.$watch('InterviewController.map.cities', function (cities:Array<TSPICity>) {
                    //console.warn('Map Cities: ', cities);
                    scope.ui.drawCities();
                });

                scope.$parent.$watch('InterviewController.selectedPath', function (selectedPath:TSPIPath) {
                    //console.warn('Shortest Path: ', selectedPath);

                    if (selectedPath){
                        scope.ui.drawPath(selectedPath.cities);
                    }

                });


            }
        };
    }
}

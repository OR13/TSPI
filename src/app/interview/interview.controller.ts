/// <reference path="../reference.ts" />

module TSPI.Controllers {
    'use strict';

    interface IInterviewScope extends ng.IScope {
        nickname: String
        aceOptions: Object;
        aceModel: String;
        interviewMap: Map
        interviewSim: Sim
    }

    export class InterviewController {
        /* @ngInject */
        constructor($scope:IInterviewScope) {
            $scope.nickname = "Joe Bob";

            $scope.interviewMap = new Map();

            var randomWithRange = function (min, max) {
                return (Math.random() * (max - min) + 1) + min;
            };

            for (var cityId = 0; cityId < 8; cityId++) {
                var city = new City(
                    cityId,
                    "My City",
                    "Its Description",
                    "purple",
                    randomWithRange(128, 384),
                    randomWithRange(128, 384)
                );

                $scope.interviewMap.cities.push(city);
            }

            console.log($scope.interviewMap);


            $scope.aceOptions = {
                useWrapMode: true,
                showGutter: false,
                theme: 'twilight',
                mode: 'javascript',
                firstLineNumber: 5,
                onLoad: function (_editor) {
                    // Options
                    _editor.setReadOnly(false);
                },
                onChange: function (e) {

                    if ($scope.interviewMap) {

                        $scope.interviewSim = new Sim($scope.interviewMap);

                        console.log('hook me', $scope.interviewSim);
                    }

                }
            };

            // Initial code content...
            $scope.aceModel =
                `

// This function rates a node between 0 (not attractive) and 1 (very attractive)
var h = function (distance: number, edgeValue: number, passNumber : number) {

};

`;

        }
    }

}



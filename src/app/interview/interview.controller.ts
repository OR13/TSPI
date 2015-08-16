/// <reference path="../reference.ts" />

module TSPI.Controllers {
    'use strict';

    export interface IInterviewScope extends ng.IScope {
        aceOptions: Object;
        aceModel: String;
        interviewSim: TSPISim
    }

    export class InterviewController {
        /* @ngInject */
        constructor($scope: IInterviewScope) {

            $scope.interviewSim = new TSPISim();

            $scope.aceOptions = {
                useWrapMode: true,
                showGutter: false,
                theme: 'twilight',
                mode: 'javascript',
                firstLineNumber: 5,
                onLoad: function (_editor: any) {
                    // options
                    _editor.setReadOnly(false);
                    _editor.$blockScrolling = Infinity;
                },
                onChange: function (e: any) {
                    console.log('editor changed...', e);
                }
            };

            // initial code content...
            $scope.aceModel =
                `

// Comment
var h = function (distance, edgeValue, passNumber) {

};

`;

        }


    }

}




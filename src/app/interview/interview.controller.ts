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
                    //console.log('editor changed...', e);
                }
            };

            // initial code content...
            $scope.aceModel =
                `

/**
 * This function determines which node the ant will travel to next.
 * Each node remaining in the circuit will result in a call to this function.
 * The node that scores the highest will be chosen.
 * Higher value == better choice.
 *
 * @param distance   - the distance to the node in question
 * @param edgeValue  - 1 + n (where n is the number of winner ants that have taken this edge)
 * @param passNumber - the pass
 * @return
 */

@Override // [0, 1]
public double scoreEdgeCandidate(double distance, double edgeValue, int passNumber) {

    if (passNumber == 1) {
        return 1 / distance;
    }
    if (mRandom.nextBoolean()) {
        return edgeValue * (mRandom.nextDouble() * 20) / distance;
    } else {
        return (1 / distance) * edgeValue;
    }
}


`;

        }


    }

}




/// <reference path="../reference.ts" />

module TSPI {
    'use strict';

    class StackComponent {
        public rank: number;
        public title: string;
        public url: string;
        public description: string;
        public logo: string;

        constructor(title: string, url: string, description: string, logo: string) {
            this.title = title;
            this.url = url;
            this.description = description;
            this.logo = logo;
            this.rank = Math.random();
        }
    }

    interface IMainScope extends ng.IScope {
        stackComponents: StackComponent[]
    }

    export class DeveloperFeaturesController {
        /* @ngInject */
        constructor($scope: IMainScope) {
            $scope.stackComponents = new Array<StackComponent>();
            [
                {
                    'title': 'AngularJS',
                    'url': 'https://angularjs.org/',
                    'description': 'HTML enhanced for web apps!',
                    'logo': 'angular.png'
                },
                {
                    'title': 'Github Pages',
                    'url': 'https://pages.github.com/',
                    'description': 'Websites for you and your projects.',
                    'logo': 'github.png'
                },
                {
                    'title': 'BrowserSync',
                    'url': 'http://browsersync.io/',
                    'description': 'Time-saving synchronised browser testing.',
                    'logo': 'browsersync.png'
                },
                {
                    'title': 'GulpJS',
                    'url': 'http://gulpjs.com/',
                    'description': 'The streaming build system.',
                    'logo': 'gulp.png'
                },
                {
                    'title': 'Jasmine',
                    'url': 'http://jasmine.github.io/',
                    'description': 'Behavior-Driven JavaScript.',
                    'logo': 'jasmine.png'
                },
                {
                    'title': 'Karma',
                    'url': 'http://karma-runner.github.io/',
                    'description': 'Spectacular Test Runner for JavaScript.',
                    'logo': 'karma.png'
                },
                {
                    'title': 'Protractor',
                    'url': 'https://github.com/angular/protractor',
                    'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
                    'logo': 'protractor.png'
                },
                {
                    'title': 'Bootstrap',
                    'url': 'http://getbootstrap.com/',
                    'description': 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.',
                    'logo': 'bootstrap.png'
                },
                {
                    'title': 'Angular UI Bootstrap',
                    'url': 'http://angular-ui.github.io/bootstrap/',
                    'description': 'Bootstrap components written in pure AngularJS by the AngularUI Team.',
                    'logo': 'ui-bootstrap.png'
                },
                {
                    'title': 'Less',
                    'url': 'http://lesscss.org/',
                    'description': 'Less extends the CSS language, adding features that allow variables, mixins, functions and many other techniques.',
                    'logo': 'less.png'
                },
                {
                    'title': 'TypeScript',
                    'url': 'http://www.typescriptlang.org/',
                    'description': 'TypeScript, a typed superset of JavaScript that compiles to plain JavaScript.',
                    'logo': 'typescript.png'
                },
                {
                    'title': 'CoffeeScript',
                    'url': 'http://coffeescript.org/',
                    'description': 'CoffeeScript, \'a little language that compiles into JavaScript\'.',
                    'logo': 'coffeescript.png'
                }
            ].forEach(function (stackComponent: StackComponent) {
                    $scope.stackComponents.push(stackComponent);
                });
        }
    }

}

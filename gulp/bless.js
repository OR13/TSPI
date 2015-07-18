'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var wiredep = require('wiredep').stream;


var autoprefixer = require('autoprefixer-core');
var mqpacker = require('css-mqpacker');
var csswring = require('csswring');


var cssProcessors = [
    autoprefixer({browsers: ['last 2 version']}),
    mqpacker,
    csswring,
    $.csso,
    $.bless
];

module.exports = function (options) {

    gulp.task('bless', ['styles'], function () {

        return gulp.src(options.tmp + '/serve/app/*.css', {read: true})
            .pipe($.concat('all.css'))
            .pipe($.postcss(cssProcessors)).on('error', options.errorHandler('Autoprefixer'))
            .pipe(gulp.dest(options.tmp + '/serve/styles/'));

    });

};

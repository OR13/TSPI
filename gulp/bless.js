'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var wiredep = require('wiredep').stream;

module.exports = function (options) {

    gulp.task('bless', ['styles'], function () {

        return gulp.src(options.tmp + '/serve/app/*.css', {read: true})
            .pipe($.concat('all.css'))
            .pipe($.csso())
            .pipe($.bless())
            .pipe(gulp.dest(options.tmp + '/serve/blessed-styles/'));

    });

};

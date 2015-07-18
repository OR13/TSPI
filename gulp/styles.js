'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var $ = require('gulp-load-plugins')();

var autoprefixer = require('autoprefixer-core');
var mqpacker = require('css-mqpacker');
var csswring = require('csswring');


var wiredep = require('wiredep').stream;

module.exports = function (options) {
    gulp.task('styles', function () {
        var lessOptions = {
            options: [
                'bower_components',
                options.src + '/app'
            ]
        };

        var injectFiles = gulp.src([
            options.src + '/app/**/*.less',
            '!' + options.src + '/app/index.less',
            '!' + options.src + '/app/vendor.less'
        ], {read: false});

        var injectOptions = {
            transform: function (filePath) {
                filePath = filePath.replace(options.src + '/app/', '');
                return '@import \'' + filePath + '\';';
            },
            starttag: '// injector',
            endtag: '// endinjector',
            addRootSlash: false
        };

        var indexFilter = $.filter('index.less');
        var vendorFilter = $.filter('vendor.less');

        var cssProcessors = [
            autoprefixer({browsers: ['last 2 version']}),
            mqpacker,
            csswring
        ];

        return gulp.src([
            options.src + '/app/index.less',
            options.src + '/app/vendor.less'
        ])
            .pipe(indexFilter)
            .pipe($.inject(injectFiles, injectOptions))
            .pipe(indexFilter.restore())
            .pipe(vendorFilter)
            .pipe(wiredep(options.wiredep))
            .pipe(vendorFilter.restore())
            .pipe($.sourcemaps.init())
            .pipe($.less(lessOptions)).on('error', options.errorHandler('Less'))
            .pipe($.postcss(cssProcessors)).on('error', options.errorHandler('Autoprefixer'))
            .pipe($.sourcemaps.write())
            .pipe(gulp.dest(options.tmp + '/serve/app/'))
            .pipe(browserSync.reload({stream: true}));
    });
};

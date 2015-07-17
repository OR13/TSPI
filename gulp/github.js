'use strict';

var gulp    = require('gulp');
var wiredep = require('wiredep').stream;
var gghp    = require('gulp-gh-pages');
var debug   = require('gulp-debug');
var rename  = require('gulp-rename');
var pack    = require('../package.json')
var $       = require('gulp-load-plugins')();

module.exports = function(options) {

  gulp.task('gh-prep', [], function () {

    return gulp.src("./dist/index.html")
      .pipe( rename('404.html') )
      .pipe( gulp.dest('./dist') );

  });

  gulp.task('gh-deploy', ['gh-prep'], function () {

    var options = { 
      branch:  'gh-pages', 
      message: "v" + pack.version
    }

    return gulp.src('./dist/**/*')
    
      .pipe( debug() )
      .pipe( gghp(options)  );

  });

};

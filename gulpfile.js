'use strict';
var del = require('del')
  , gulp = require('gulp')
  , tsd = require('gulp-tsd')
  , typescript = require('gulp-typescript')
  , tsProject;

tsProject = typescript.createProject('tsconfig.json');

gulp.task('clean', function (cb) {
  del('./app/**/*.js', cb);
});

gulp.task('typings', function (cb) {
  tsd({
    command: 'reinstall',
    config: './tsd.json'
  }, cb);
});

gulp.task('compile', ['clean', 'typings'], function () {
  var tsResult = tsProject.src()
    .pipe(typescript({
      typescript: require('typescript')
    }));

  return tsResult.js
    .pipe(gulp.dest('./'))
});

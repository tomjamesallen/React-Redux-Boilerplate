var gulp = require('gulp');
var config = require('../gulp-config.json').public;
var connect = require('gulp-connect');

gulp.task('compile:public', function () {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.outputDir))
    .pipe(connect.reload());
});

gulp.task('watch:public', ['compile:public'], function () {
  return gulp.watch([config.src], ['compile:public']);
});
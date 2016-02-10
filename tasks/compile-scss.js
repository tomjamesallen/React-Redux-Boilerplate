var gulp = require('gulp');
var config = require('../gulp-config.json').scss;
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var pxrem = require('gulp-pixrem');
var autoprefixer = require('gulp-autoprefixer');
var connect = require('gulp-connect');

gulp.task('compile:scss', function () {
  var ENV = process.env.NODE_ENV;
  return gulp.src(config.src)
    .pipe(sass({
      outputStyle: ENV === 'development' ? 'expanded' : 'compressed'
    }).on('error', function (err) {
      console.log(err);
      this.emit('end');
    }))
    .pipe(concat(config.outputFileName))
    .pipe(pxrem())
    .pipe(autoprefixer('last 4 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest(config.outputDir))
    .pipe(connect.reload());
});

gulp.task('watch:scss', ['compile:scss'], function () {
  return gulp.watch(config.toWatch, ['compile:scss']);
});
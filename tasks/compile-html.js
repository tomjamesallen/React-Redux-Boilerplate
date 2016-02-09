var gulp = require('gulp');
var config = require('../gulp-config.json').html;
var minifyHTML = require('gulp-minify-html');
var connect = require('gulp-connect');

gulp.task('compile:html', function () {
  gulp.src(config.src)
    .pipe(minifyHTML({
      empty: true,
      cdata: true,
      conditionals: true,
      spare: true,
      quotes: true,
    }))
    .pipe(gulp.dest(config.outputDir))
    .pipe(connect.reload());
});

gulp.task('watch:html', function () {
  gulp.watch([config.src], ['compile:html']);
});
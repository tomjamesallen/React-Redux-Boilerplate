var gulp = require('gulp');
var config = require('../gulp-config.json').js;
var browserify = require('browserify');
var babelify = require('babelify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var streamify = require('gulp-streamify');
var connect = require('gulp-connect');
var envify = require('envify/custom');
var gulpif = require('gulp-if');

gulp.task('compile:js', function () {
  return scripts(false);
});

gulp.task('watch:js', function () {
  return scripts(true);
});

function scripts(watch) {
  var ENV = process.env.NODE_ENV;
  var bundler, rebundle;

  bundler = browserify(config.src, {
    debug: ENV === 'development' ? true : false,
    cache: {},
    packageCache: {},
    fullPaths: watch
  });

  if (watch) bundler = watchify(bundler);
  bundler.transform(babelify);
  bundler.transform(envify({
    NODE_ENV: process.env.NODE_ENV
  }));

  rebundle = function() {
    console.log('Rebundling JS');
    var stream = bundler.bundle();
    stream.on('error', function (err) {
      console.log(err);
      this.emit('end');
    });

    stream
      .pipe(source(config.outputFileName))
      .pipe(streamify(gulpif(ENV === 'production', uglify())))
      .pipe(gulp.dest(config.outputDir))
      .pipe(connect.reload());
      
    return stream;
  };

  bundler.on('update', rebundle);
  return rebundle();
}
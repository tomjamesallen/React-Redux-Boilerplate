var gulp = require('gulp');
var config = require('../gulp-config.json').js;
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var streamify = require('gulp-streamify');
var connect = require('gulp-connect');

gulp.task('compile:js', function () {
  return scripts(false);
});

gulp.task('watch:js', function () {
  return scripts(true);
});

function scripts(watch) {
  var bundler, rebundle;

  bundler = browserify(config.src, {
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: watch,
    shim: {
      jQuery: {
        path: './src/vendor/jquery-1.11.3.min.js',
        exports: 'jQuery'
      }
    }
  });

  if(watch) {
    bundler = watchify(bundler) 
  }

  bundler.transform(reactify);

  rebundle = function() {
    var stream = bundler.bundle();
    stream.on('error', function (err) {
      console.log(err);
      this.emit('end');
    });

    stream
      .pipe(source(config.outputFileName))
      // .pipe(streamify(uglify()))
      .pipe(gulp.dest(config.outputDir))
      .pipe(connect.reload());
      
    return stream;
  };

  bundler.on('update', rebundle);
  return rebundle();
}
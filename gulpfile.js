var gulp = require('gulp');
var requireDir = require('require-dir');
var runSequence = require('run-sequence');
var env = require('gulp-env');

requireDir('./tasks');

// Gulp needs to perform the following tasks:
// * Compile front end assets - JS / CSS / HTML (requires watch)
// 
// Directory structure is as follows:
// - src/
//    - scss/
//    - js/
//    - index.html
// - dist/
//    - css/
//    - js/
//    - index.html

// Setup env.
gulp.task('set-env:development', function () {
  env({
    vars: {
      NODE_ENV: 'development'
    }
  });
});
gulp.task('set-env:production', function () {
  env({
    vars: {
      NODE_ENV: 'production'
    }
  });
});

// Compile static assets.
gulp.task('compile-assets', ['compile:js', 'compile:html', 'compile:scss']);

// Build tasks.
gulp.task('build:development', function (callback) {
  runSequence('set-env:development', 'compile-assets', callback);
});
gulp.task('build:production', function (callback) {
  runSequence('set-env:production', 'compile-assets', callback);
});

// Alias for production build.
gulp.task('build', ['build:production']);

// Watch task (will also do initial build).
gulp.task('watch', ['watch:js', 'watch:html', 'watch:scss']);

// Fake live environement.
gulp.task('faux-production', function(callback) {
  runSequence('set-env:production', 'watch', 'dev-server', callback);
});

// Default task.
gulp.task('default', function(callback) {
  runSequence('set-env:development', 'watch', 'dev-server', callback);
});

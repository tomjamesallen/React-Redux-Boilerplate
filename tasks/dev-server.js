var gulp = require('gulp');
var path = require('path');
var connect = require('gulp-connect');

var portNumber = 8765;

gulp.task('dev-server', function () {
  connect.server({
    root: 'dist',
    port: portNumber,
    livereload: true
  });
});

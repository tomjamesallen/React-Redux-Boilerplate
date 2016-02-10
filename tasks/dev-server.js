var gulp = require('gulp');
var path = require('path');
var connect = require('gulp-connect');

var portNumber = 8899;

gulp.task('dev-server', function () {
  connect.server({
    root: 'dist',
    fallback: 'dist/index.html',
    port: portNumber,
    livereload: true
  });
});

var gulp = require('gulp');

var requireDir = require('require-dir');
requireDir('./tasks');

// Gulp needs to perform the following tasks:
// * Compile front end assets - JS / CSS (requires watch)
// 
// Directory structure is as follows:
// - src/
//    - scss/
//    - js/
// - dist/
//    - css/
//    - js/
//    - imgs/
//      - logo.png

gulp.task('default', ['compile-assets', 'dev-server', 'watch']);

gulp.task('watch', ['watch:js', 'watch:html', 'watch:scss']);

gulp.task('compile-assets', function () {
  gulp.start('compile:js', 'compile:html', 'compile:scss');
});

gulp.task('build', ['compile-assets']);

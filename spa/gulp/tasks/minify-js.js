/* Minify JS Task
 * -------------------- */
'use strict';


var gulp = require('gulp'),
$        = require('gulp-load-plugins')();



module.exports = gulp.task('minify-js', function() {
   gulp.src('assets/js/*.js')
   .pipe($.uglify())
   .pipe(gulp.dest('./_build/'));
});

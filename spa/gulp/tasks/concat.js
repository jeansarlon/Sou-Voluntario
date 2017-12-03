/* Concat Task
 * -------------------- */
'use strict';


var gulp = require('gulp'),
$        = require('gulp-load-plugins')();



module.exports = gulp.task('concat', function() {
   gulp.src('./assets/js/*.js').pipe($.concat('scripts.js')).pipe(gulp.dest('./_build/'));
});

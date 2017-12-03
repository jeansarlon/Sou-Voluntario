/* fonts Task
 * -------------------- */
'use strict';


var gulp = require('gulp'),
$        = require('gulp-load-plugins')();



module.exports = gulp.task('fonts', function() {
   gulp.src('./assets/fonts/**/*.{ttf,woff,eof,eot,svg}')
   .pipe($.changed('./_build/fonts'))
   .pipe(gulp.dest('./_build/fonts'));
});

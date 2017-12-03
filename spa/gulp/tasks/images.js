/* Images Task
 * -------------------- */
'use strict';


var gulp = require('gulp'),
$        = require('gulp-load-plugins')();



module.exports = gulp.task('images', function() {
   return gulp.src('./assets/images/**/*')
   .pipe($.changed('./_build/images'))
   .pipe($.imagemin({optimizationLevel: 3, progressive: true, interlaced: true}))
   .pipe(gulp.dest('./_build/images'));
});

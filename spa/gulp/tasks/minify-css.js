/* minify-css Task
 * -------------------- */
'use strict';


var gulp = require('gulp'),
$        = require('gulp-load-plugins')();



module.exports = gulp.task('minify-css', function() {
   gulp.src(['./assets/styles/**/*.css', '!./assets/styles/**/*.min.css'])
   .pipe($.rename({suffix: '.min'}))
   .pipe($.minifyCss({keepBreaks: true}))
   .pipe(gulp.dest('./assets/styles/'))
   .pipe(gulp.dest('./_build/css/'));
});

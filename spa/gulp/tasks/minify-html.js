/* Minify html Task
 * -------------------- */
'use strict';


var gulp = require('gulp'),
$        = require('gulp-load-plugins')();



module.exports = gulp.task('minify-html', function() {
   var opts = {
      comments: true,
      spare: true,
      conditionals: true
   };

   gulp.src('./*.html')
   .pipe($.minifyHtml(opts))
   .pipe(gulp.dest('./_build/'));
});

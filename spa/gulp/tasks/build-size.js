/* size build task
 * -------------------- */
'use strict';


var gulp = require('gulp'),
$        = require('gulp-load-plugins')();



module.exports = gulp.task('build:size', function() {
   var s = $.size();

   return gulp.src('./_build/**/*.*').pipe(s).pipe($.notify({
      onLast: true,
      message: function() {
         return 'Total build size ' + s.prettySize;
      }
   }));
});

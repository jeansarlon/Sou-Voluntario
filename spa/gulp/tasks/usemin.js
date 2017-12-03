/* ..
 * -------------------- */
'use strict';

var gulp = require('gulp'),
$        = require('gulp-load-plugins')();



module.exports = gulp.task('usemin', function() {
   return gulp.src('./index.html')
   // add templates path
   .pipe($.htmlReplace({'templates': '<script type="text/javascript" src="js/templates.js"></script>'}))
   .pipe($.usemin({
      css: [$.minifyCss(), 'concat'],
      libs: [$.uglify()],
      nonangularlibs: [$.uglify()],
      angularlibs: [$.uglify()],
      appcomponents: [$.uglify()],
      mainapp: [$.uglify()]
   }))
   .pipe(gulp.dest('./_build/'));
});

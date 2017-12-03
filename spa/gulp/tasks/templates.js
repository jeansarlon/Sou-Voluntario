/* ..
 * -------------------- */
'use strict';


var gulp = require('gulp'),
$        = require('gulp-load-plugins')();



module.exports = gulp.task('templates', function() {
   return gulp.src(['./**/*.html', '!bower_components/**/*.*', '!node_modules/**/*.*', '!_build/**/*.*'])
   .pipe($.minifyHtml())
   .pipe($.angularTemplatecache({module: 'App'}))
   .pipe(gulp.dest('_build/js'));
});

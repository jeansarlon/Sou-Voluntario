/* Default task
 * -------------------- */
'use strict';


var gulp    = require('gulp'),
browserSync = require('browser-sync'),
reload = browserSync.reload;



module.exports = gulp.task('default', [ 'browser-sync', 'sass', 'minify-css'], function() {
   gulp.watch('assets/styles/*.css', function(file) {
      if (file.type === "changed") {
         reload(file.path);
      }
   });
   gulp.watch([
      '*.html', 'components/**/*.html','painel/**/*.html', 'views/**/*.html'
   ], ['bs-reload']);
   gulp.watch([
      'app/**/*.js', 'components/**/*.js', 'assets/js/*.js'
   ], ['bs-reload']);
   gulp.watch('assets/styles/**/*.scss', ['sass', 'minify-css']);
});

/* browser-sync Task
 * -------------------- */

'use strict';


var gulp       = require('gulp'),
browserSync = require('browser-sync'),
reload = browserSync.reload;



module.exports = gulp.task('browser-sync', function() {
   browserSync({
      server: {
         baseDir: "./"
      }
   });
});

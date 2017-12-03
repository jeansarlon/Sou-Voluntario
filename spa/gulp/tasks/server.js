/* Server Task
 * -------------------- */
'use strict';


var gulp       = require('gulp'),
browserSync = require('browser-sync');



module.exports = gulp.task('server', function(done) {
   return browserSync({
      server: {
         baseDir: './'
      }
   }, done);
});

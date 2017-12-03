/* Server Build Task
 * -------------------- */
'use strict';


var gulp       = require('gulp'),
browserSync = require('browser-sync');



module.exports = gulp.task('server-build', function(done) {
   return browserSync({
      server: {baseDir: './_build/'}
   }, done);
});

/* Clean build task
 * -------------------- */
'use strict';


var gulp = require('gulp'),
del = require('del');



module.exports = gulp.task('clean:build', function(cb) {
   del([
      './_build/'
      // if we don't want to clean any file we can use negate pattern
      //'!dist/mobile/deploy.json'
   ], cb);
});

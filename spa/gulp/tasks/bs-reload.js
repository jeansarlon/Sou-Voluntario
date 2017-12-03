/* BrowserSync Task
 * -------------------- */
'use strict';


var gulp = require('gulp'),
browserSync = require('browser-sync');



module.exports = gulp.task('bs-reload', function() {
   browserSync.reload();
});

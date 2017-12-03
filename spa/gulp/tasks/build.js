/* Build task
 * -------------------- */
'use strict';


var gulp = require('gulp'),
runSequence = require('run-sequence');



module.exports = gulp.task('build', function(callback) {
   runSequence('clean:build', 'sass:build', 'images', 'templates', 'usemin', 'fonts', 'build:size', callback);
});

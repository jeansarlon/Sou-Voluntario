/* Sass Task
 * -------------------- */
'use strict';


var gulp    = require('gulp'),
$           = require('gulp-load-plugins')(),
browserSync = require('browser-sync'),
reload      = browserSync.reload;



module.exports = gulp.task('sass', function() {
   return gulp.src('assets/styles/style.scss')
   .pipe($.sourcemaps.init())
   .pipe($.sass({style: 'expanded'}))
   .on('error', function(err){
      console.log(err);
      $.notify.onError({title: 'SASS Failed', message: 'Error(s) occurred during compile!'})
   })
   .pipe($.sourcemaps.write()).pipe(gulp.dest('assets/styles'))
   .pipe(reload({stream: true})).pipe($.notify({message: 'Styles task complete'}));
});

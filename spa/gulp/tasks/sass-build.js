/* Sass build Task
 * -------------------- */
'use strict';


var gulp = require('gulp'),
$        = require('gulp-load-plugins')();



module.exports = gulp.task('sass:build', function() {
   var s = $.size();

   return gulp.src('assets/styles/style.scss')
   .pipe($.sass({style: 'compact'}))
   .pipe($.autoprefixer('last 3 version'))
   .pipe($.uncss({
      html: [
         './index.html', './views/**/*.html', './components/**/*.html'
      ],
      ignore: ['.index', '.slick', /\.owl+/, /\.owl-next/, /\.owl-prev/]
   })).pipe($.minifyCss({keepBreaks: true, aggressiveMerging: false, advanced: false}))
   .pipe($.rename({suffix: '.min'}))
   .pipe(gulp.dest('_build/css'))
   .pipe(s)
   .pipe($.notify({
      onLast: true,
      message: function() {
         return 'Total CSS size ' + s.prettySize;
      }
   }));
});

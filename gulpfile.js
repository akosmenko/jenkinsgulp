var gulp = require('gulp');
var minifyInline = require('gulp-minify-inline');

gulp.task('default', function() {
  gulp
    .src('*.html')
    .pipe(minifyInline())
    .pipe(gulp.dest('build/'));
});

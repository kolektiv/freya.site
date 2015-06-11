var gulp = require('gulp'),
    $ = require('gulp-load-plugins')();

gulp.task('css', function () {
  $.rubySass('../_sass/main.scss')
    .pipe($.autoprefixer({
      browsers: ['> 1%']
    }))
    .pipe($.minifyCss())
    .pipe(gulp.dest('../css'))
    .pipe($.connect.reload());
});

gulp.task('site', function () {
  gulp.src('../_site/**/*.html')
    .pipe($.connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['../_sass/**/*.*'], ['css']);
  gulp.watch(['../_site/**/*.html'], ['site']);
});

gulp.task('serve', function () {
  $.connect.server({
    root: '../_site',
    livereload: true
  });
});

gulp.task('default', [
  'css',
  'html',
  'watch',
  'serve'
]);
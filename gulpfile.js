const gulp = require('gulp'),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      cssmin = require('gulp-cssmin');

const data = {
  css: './assets/css',
  scss: './assets/sass/**/*.scss'
};

gulp.task('sass', ()=> {
  gulp.src(data.scss)
    .pipe(sass({
      includePaths: ['scss']
    }))
    .pipe(gulp.dest(data.css));
});

gulp.task('cssmin', ()=> {
    gulp.src('./assets/css/efroli.css')
        .pipe(cssmin())
        .pipe(autoprefixer({
          browsers: ['last 2 versions'],
          cascade: false
          }))
        .pipe(gulp.dest(data.css));
});

gulp.task('watch', ()=> {
  gulp.watch([data.scss], ['sass']);
  gulp.watch(['./assets/css/efroli.css'], ['cssmin']);
});

gulp.task('default', ['watch', 'sass', 'cssmin']);

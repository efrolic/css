const gulp = require('gulp'),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      cssmin = require('gulp-cssmin'),
      browserSync = require('browser-sync').create();


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

gulp.task('browser-sync', ()=> {
    browserSync.init({
        proxy: "http://localhost:4000/"
    });
});

gulp.task('cssmin', ()=> {
    gulp.src('./assets/css/efrolic.css')
        .pipe(cssmin())
        .pipe(autoprefixer({
          browsers: ['last 2 versions'],
          cascade: false
          }))
        .pipe(gulp.dest(data.css));
});

const route = (['./**/*.html', './assets/css/*.css', './*.json', './assets/js/*.js']);

gulp.task('watch', ()=> {
  gulp.watch([data.scss], ['sass']).on('change', browserSync.reload);
  gulp.watch(['./assets/css/efrolic.css'], ['cssmin']);
  gulp.watch([route]).on('change', browserSync.reload);
});

gulp.task('default', ['watch', 'sass', 'cssmin', 'browser-sync']);

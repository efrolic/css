const gulp = require('gulp'),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      cssmin = require('gulp-cssmin'),
      rename = require ('gulp-rename'),
      sourcemaps = require ('gulp-sourcemaps'),
      browserSync = require('browser-sync').create();


const data = {
  css: './assets/css/dist',
  scss: './assets/sass/**/*.scss'
};

gulp.task('sass', ()=> {
  gulp.src(data.scss)
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: ['scss'],
      outputStyle: 'expanded'
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(data.css));
});

gulp.task('browser-sync', ()=> {
    browserSync.init({
        proxy: "http://localhost:4000/"
    });
});

gulp.task('rename', ()=> {
gulp.src('./assets/css/dist/efrolic.css')
  .pipe(rename('efrolic.min.css'))
  .pipe(gulp.dest(data.css));

});

gulp.task('cssmin', ()=> {
    gulp.src('./assets/css/dist/efrolic.min.css')
        .pipe(cssmin())
        .pipe(autoprefixer({
          browsers: ['last 1 versions'],
          cascade: false
          }))
        .pipe(gulp.dest(data.css));
});

const route = (['./**/*.html', './assets/css/**/*.css', './*.json', './assets/js/*.js']);

gulp.task('watch', ()=> {
  gulp.watch([data.scss], ['sass']).on('change', browserSync.reload);
  gulp.watch(['./assets/css/dist/efrolic.min.css'], ['cssmin']);
  gulp.watch(['./assets/css/dist/efrolic.css'], ['rename']);
  gulp.watch([route]).on('change', browserSync.reload);
});

gulp.task('default', ['watch', 'sass', 'rename', 'cssmin', 'browser-sync']);

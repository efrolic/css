const gulp = require('gulp'),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      cssmin = require('gulp-cssmin'),
      shell = require('gulp-shell'),
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

// Build Jekyll
gulp.task('jekyll', function() {
  return gulp.src('index.html', { read: false })
    .pipe(shell([
      'bundle exec jekyll build'
  ]));
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

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "_site"
        }
    });
});
const routes = (['./**/*.html',
                 './assets/css/*.css',
                 './**/*.md',
                 './**/*.yml',
                 './assets/sass/*.scss']);

gulp.task('watch', ()=> {
  gulp.watch([routes], ['jekyll']).on('change', browserSync.reload);
  gulp.watch([data.scss], ['sass']);
  gulp.watch(['./assets/css/efroli.css'], ['cssmin']);
});

gulp.task('default', ['watch', 'browser-sync', 'sass', 'cssmin', 'jekyll']);

/**
 * Created by liww on 17/6/15.
 */

// 引入组件
var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var postcss = require('gulp-postcss');

gulp.task('css', function() {
  return gulp
    .src('sass/dxy-ui.scss')
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([
      require('autoprefixer')
    ]))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('cssmin', ['css'], function() {
  return gulp
    .src('dist/css/dxy-ui.css')
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function() {
  gulp.watch(['sass/**/*.scss', 'sass/mixins/**/*.scss'], ['cssmin']);
});

gulp.task('default', ['css', 'cssmin']);
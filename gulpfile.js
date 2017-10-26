// 引入组件
var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var postcss = require('gulp-postcss');
var babel = require("gulp-babel");
var es2015 = require("babel-preset-es2015");
var uglify = require('gulp-uglify');
var tool = require('./tool');

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

gulp.task('docscss', function() {
	return gulp
		.src(['docs/src/prism.css', 'docs/src/code.css', 'docs/src/docs.css', 'docs/src/example.css'])
		.pipe(concat('docs.css'))
		.pipe(cssmin())
		.pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('docs/dist'));
});

gulp.task('docsjs', function() {
	return gulp
		.src(['docs/src/prism.js', 'docs/src/index.js'])
		.pipe(concat('docs.js'))
		.pipe(babel({presets:[es2015]}))
		.pipe(uglify())
		.pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('docs/dist'));
});

gulp.task('watch', function() {
  gulp.watch(['sass/**/*.scss', 'sass/mixins/**/*.scss'], ['cssmin']);
});

gulp.task('docs', ['docscss', 'docsjs'], function () {
  tool.getFile('docs');
});

gulp.task('default', ['css', 'cssmin', 'docs']);
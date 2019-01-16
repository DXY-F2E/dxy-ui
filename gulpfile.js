// 引入组件
const gulp = require('gulp');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const concat = require('gulp-concat');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const babel = require('gulp-babel');
const es2015 = require('babel-preset-es2015');
const uglify = require('gulp-uglify');
const tool = require('./tool');

gulp.task('css', () => gulp
  .src('sass/dxy-ui.scss')
  .pipe(sassGlob())
  .pipe(sass().on('error', sass.logError))
  .pipe(postcss([
    require('autoprefixer'),
  ]))
  .pipe(gulp.dest('dist/css')));

gulp.task('cssmin', ['css'], () => gulp
  .src('dist/css/dxy-ui.css')
  .pipe(cssmin())
  .pipe(rename({ suffix: '.min' }))
  .pipe(gulp.dest('dist/css')));

gulp.task('docscss', () => gulp
  .src(['docs/src/prism.css', 'docs/src/code.css', 'docs/src/docs.css', 'docs/src/example.css'])
  .pipe(concat('docs.css'))
  .pipe(cssmin())
  .pipe(rename({ suffix: '.min' }))
  .pipe(gulp.dest('docs/dist')));

gulp.task('docsjs', () => gulp
  .src(['docs/src/prism.js', 'docs/src/index.js'])
  .pipe(concat('docs.js'))
  .pipe(babel({ presets: [es2015] }))
  .pipe(uglify())
  .pipe(rename({ suffix: '.min' }))
  .pipe(gulp.dest('docs/dist')));

gulp.task('watch', () => {
  gulp.watch(['sass/**/*.scss', 'sass/mixins/**/*.scss'], ['cssmin']);
});

gulp.task('docs', ['docscss', 'docsjs'], () => {
  tool.getFile('docs');
});

gulp.task('default', ['css', 'cssmin', 'docs']);

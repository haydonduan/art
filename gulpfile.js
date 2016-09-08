'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass:concat:autoprefixer', function () {
  return gulp.src("./scss/**/*.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('main.css'))
    .pipe(autoprefixer({
         browsers: ['last 2 versions', 'Android >= 4.0'],
         cascade: true, //是否美化属性值 默认：true 像这样：
           //  -webkit-transform: rotate(45deg);
           //  transform: rotate(45deg);
         remove:true //是否去掉不必要的前缀 默认：true 
       }))
    .pipe(gulp.dest('./public/css/'))
});

gulp.task('css:watch', function () {
  gulp.watch('./scss/**/*.scss', ['sass:concat:autoprefixer']);
});

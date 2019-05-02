var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var gutil = require('gulp-util');
var header = require('gulp-header');
var pkg = require('./package.json');
var banner = ['/**',
    ' * jQuery Docked Link Plugin',
    ' * <%= pkg.homepage %>',
    ' * Copyright 2017 <%= pkg.author %>',
    ' * Released under the <%= pkg.license %> License',
    ' */',
    ''].join('\n');

gulp.task('minify-plugin', function () {
  return gulp.src('docked-link.js')
    .pipe(uglify({}))
    .on('error', function (err) {
      gutil.log(gutil.colors.red('[Error]'), err.toString());
    })
    .pipe(header(banner, {
        pkg: pkg
    }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('.'));
});

gulp.task('default', gulp.series('minify-plugin'));

gulp.task('watch', function () {
    gulp.watch('docked-link.js', gulp.series('minify-plugin'));
});

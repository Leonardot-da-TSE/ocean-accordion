
var gulp = require('gulp');
var browserify = require('gulp-browserify');
var minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');


gulp.task('minify-css', function() {
    gulp.src('./src/*.css')
        .pipe(minifycss())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest( './dist/' ));
});

gulp.task('minify-javascript', function() {
    gulp.src('./src/*.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('default',['minify-css', 'minify-javascript']);
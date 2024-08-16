const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');

function compilaSASS() {
    return gulp.src('./source/styles/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}

function comprimeImagens() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}

function comprimeJS() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'));
}

exports.default = function() {
    gulp.watch('./source/styles/*.scss', { ignoreInitial: false}, gulp.parallel(compilaSASS));
    gulp.watch('./source/images/*', { ignoreInitial: false}, gulp.parallel(comprimeImagens));
    gulp.watch('./source/scripts/*.js', { ignoreInitial: false}, gulp.parallel(comprimeJS));
};
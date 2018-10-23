const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const connect = require('gulp-connect');
const watch = require('gulp-watch');
const jshint = require('gulp-jshint');
const runSequence = require('run-sequence');
const sass = require('gulp-sass');
const del = require('del');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');

gulp.task('connect', function () {
    connect.server({
        root: 'src',
        livereload: true,
        port: 8080
    });
});

gulp.task('html', function () {
    gulp.src('./src/*.html')
        .pipe(gulp.dest('./src'))
        .pipe(connect.reload());
});


gulp.task('livereload', function() {
    gulp.src(['./src/bin/css/*.css', './src/bin/js/*.js'])
      .pipe(watch(['./src/bin/css/*.css', './src/bin/js/*.js']))
      .pipe(connect.reload());
  });

  gulp.task('watch', function () {
    gulp.watch('./src/*.html', ['html']);
    gulp.watch('./src/sass/*.scss', ['jsMin']);
    gulp.watch('./src/js/*.js', ['sassMin']);
});

gulp.task('default', function () {
    runSequence('build', 'connect', 'livereload', 'watch');
});

gulp.task('jsMin', function(){
    gulp.src(['./src/js/clock.js', './src/js/canvasState.js', './src/js/app.js', '**/moment.min.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('./source-map'))
    .pipe(gulp.dest('.src/bin/js'))
});

gulp.task('sassMin', function(){
    gulp.src('./src/sass/*.scss')
    .pipe(concat('style.min.css'))
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write('./source-map'))
    .pipe(gulp.dest('./src/bin/css'));
})

gulp.task('clean', function(){
    del(['dist', './src/bin'])
});

gulp.task('build', function ()  {
    runSequence('clean', ['jsMin', 'sassMin']);
});

gulp.task('copy', function () {
     gulp.src('src/app.html')
        .pipe(rename("index.html"))
        .pipe(gulp.dest("src/bin/"));
});

gulp.task('toDist', function () {
    gulp.src(['./src/bin/index.html', './src/bin/css/*.css','./src/bin/js/*min.js'])
        .pipe(gulp.dest('/dist'));
});

gulp.task('buildProd', function () {
    runSequence('clean', ['jsMin', 'sassMin', 'copy'], 'toDist');
});

gulp.task('jshint', function () {
    gulp.src('./src/bin/*.html')
        .pipe(jshint.extract())
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});
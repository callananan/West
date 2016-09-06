var gulp = require('gulp');

//CSS Pre-Processer
/*
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('app/scss/styles.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('dev/css'));
});*/

//Browser Sync
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'distro'
    },
  })
})

//Post html
//var html = require('gulp-***');
gulp.task('html', function(){
  return gulp.src('./dev/*.html')
    .pipe(gulp.dest('./distro'));
});

//PostCSS
gulp.task('css', function () {
    var postcss      = require('gulp-postcss');
    var autoprefixer = require('autoprefixer');

    return gulp.src('./dev/css/*.css')
        .pipe(postcss([ autoprefixer({ browsers: ['last 4 versions'] }) ]))
        .pipe(gulp.dest('./distro/css/'));
});

//Post JS
gulp.task('js', function(){
  return gulp.src('dev/js/**/*.js')
    .pipe(gulp.dest('./distro/js/'));
});

//Watchers
gulp.task('default', ['browserSync'], function (){
  gulp.watch('dev/css/**/*.css', ['css']);
  gulp.watch('dev/js/**/*.js', ['js']);
    gulp.watch('dev/*.html', ['html']);
//watch html and js
  gulp.watch('distro/*.html', browserSync.reload);
  gulp.watch('distro/js/**/*.js', browserSync.reload);
  gulp.watch('distro/css/**/*.css', browserSync.reload);
});

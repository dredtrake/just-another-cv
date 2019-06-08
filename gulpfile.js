const gulp = require('gulp');
const sass = require('gulp-sass');
const cssmin = require('gulp-cssnano');
const rename = require('gulp-rename');
// var uglify = require('gulp-uglify');

sass.compiler = require('node-sass');

// gulp.task('js:compress', function () {
//   return pipeline(
//         gulp.src('app/js/*.js'),
//         uglify(),
//         gulp.dest('app/js/min/')
//   );
// });

const sassDir = './sass/**/*.scss';
gulp.task('sass', function () {
  return gulp.src(sassDir)
    .pipe(sass({style: 'compressed'}))
    .pipe(sass().on('error', sass.logError))
    .pipe(cssmin({ discardComments: { removeAll: true } }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./app/css'));
});

gulp.task('sass:watch', function(){
    gulp.watch(sassDir, gulp.series('sass'));
});
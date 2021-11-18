const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const del = require('del');

gulp.task('styles', () => {
    return gulp.src('sass/**/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('clean', () => {
    return del([
        'css/main.css',
    ]);
});

gulp.task('watch', function () {
    gulp.watch('./sass/**/*.scss', gulp.series('styles'));
  });
  

gulp.task('default', gulp.series(['clean', 'styles', 'watch']));
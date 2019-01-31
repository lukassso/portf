const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const runSequence = require('run-sequence');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');

// gulp.task('default', defaultTask);
// function defaultTask(done) {
//   // place code for your default task here
//   done();
// }

gulp.task('default', (callback) => {
  runSequence(['watch', 'sass', 'browserSync'],
  callback)
})

gulp.task('browserSync', () => {
    browserSync.init( {
        server: {
            baseDir: 'src'
        },
    })
})

gulp.task('sass', () => {
    return gulp.src('src/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({
        stream: true
    }))
})


gulp.task('watch', ['browserSync', 'sass'], () => {
    gulp.watch('src/scss/**/*.scss',['sass']);
    gulp.watch('src/*.html', browserSync.reload);
    gulp.watch('src/js/**/*.js', browserSync.reload);
})


gulp.task('images', function () {
  return gulp.src('src/img/**/*.+(png|jpg|jpeg|gif|svg)')
  .pipe(cache(imagemin({
    interlaced: true
   })))
  .pipe(gulp.dest('dist/img'))
});

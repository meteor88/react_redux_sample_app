var gulp = require('gulp');
var webserver = require('gulp-webserver');
var gulpif = require('gulp-if');
var clean = require('gulp-clean');
var exec = require('child_process').exec;

// 로컬 웹서버 구동 
gulp.task('serve', function () {
  return gulp.src('dist')
    .pipe(webserver({
      livereload: true,
      open: true,
      port: 8888
    }));
});

// src -> dist 화일 복사 
gulp.task('build', () => {
  return gulp.src(['./src/**/*'])
    .pipe(gulp.dest('./dist'));
});

// webpack 수행 
gulp.task('webpack', ['build'], function (cb) {
  exec('webpack', function (err, stdout, stderr) {
    console.log(stdout);
    if (stderr) console.log(stderr);
    cb(err);
  });
})

// src 폴더 하위파일 변동사항 감시 
gulp.task('watch', function () {
  gulp.watch('./src/**/*.js', ['webpack']);
  gulp.watch('./src/**/*.css', ['build']);
  gulp.watch('./src/**/*.html', ['build']);
});

// dist 디렉토리 삭제 
gulp.task('clean-dist', function () {
  return gulp.src('./dist', { read: false })
    .pipe(clean());
});


gulp.task('clean', ['clean-dist']);
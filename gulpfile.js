var gulp = require('gulp');
var connect = require('gulp-connect');
var clean = require('gulp-clean');
var exec = require('child_process').exec;

// src -> dist 화일 복사 
gulp.task('build', () => {
  return gulp.src(['./src/**/*'])
    .pipe(gulp.dest('./dist'));
});

// webpack 수행 
gulp.task('webpack', gulp.series('build', (cb) => {
  exec(__dirname + '/node_modules/.bin/webpack', function (err, stdout, stderr) {
    console.log(stdout);
    if (stderr) console.log(stderr);
    cb(err);
  });
}));

// 로컬 웹서버 구동
gulp.task('connect-dist', gulp.series('webpack', () => {
  connect.server({
    name: 'Dist App',
    root: 'dist',
    port: 8001,
    livereload: true
  });

}));

// dist 디렉토리 삭제 
gulp.task('clean-dist', function () {
  return gulp.src('./dist', { read: false })
    .pipe(clean());
});


gulp.task('clean', gulp.parallel('clean-dist'));
gulp.task('serve', gulp.parallel('connect-dist'));
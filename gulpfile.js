const gulp = require('gulp');
const runSequence = require('run-sequence');
const rimraf = require('gulp-rimraf');
const merge = require('gulp-merge-json');

// 监听词条文件变更
gulp.task('i18n-json-merge-watch', () => {
  gulp.watch('./src/assets/i18n/parts/*.json', () => {
    runSequence('i18n-json-merge');
  });
});

// 合并词条
gulp.task('i18n-json-merge', () => {
  runSequence('i18n-json-clean', 'i18n-zh-json-merge', 'i18n-en-json-merge');
});

gulp.task('i18n-json-clean', () => {
  return gulp.src('./src/assets/i18n/*.json', { read: false }).pipe(rimraf({ force: true }));
});

gulp.task('i18n-zh-json-merge', () => {
  gulp
    .src('./src/assets/i18n/parts/zh*.json')
    .pipe(merge({ fileName: 'zh.json' }))
    .pipe(gulp.dest('./src/assets/i18n/'));
});

gulp.task('i18n-en-json-merge', () => {
  gulp
    .src('./src/assets/i18n/parts/en*.json')
    .pipe(merge({ fileName: 'en.json' }))
    .pipe(gulp.dest('./src/assets/i18n/'));
});

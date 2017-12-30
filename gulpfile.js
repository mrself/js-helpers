var gulp = require('gulp'),
	gmocha = require('gulp-mocha'),
	watch = require('gulp-watch'),
	notify = require('gulp-notify');

gulp.task('test', function () {
	return gulp.src('test/**/*.js', {read: false})
		.pipe(gmocha({
			reporter: 'spec'
		}))
		.on('error', function () {
			notify().write('Tests failed');
		});
});

gulp.task('watch', function () {
	watch(['src/**/*.js', 'test/**/*.js'], function () {
		gulp.start('test');
	});
});

gulp.task('default', ['test', 'watch']);
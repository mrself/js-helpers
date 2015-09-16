var gulp = require('gulp'),
	browserify = require('browserify'),
	watchify = require('watchify'),
	bundleLogger = require('./gulp/bundleLogger'),
	source = require('vinyl-source-stream'),
	browserSync = require('browser-sync'),
	requireDir = require('require-dir'),
	unil = require('gulp-util');

var src = './src/', outputName = 'helpers.js';

gulp.task('watchify', function() {
	var bundler = browserify({
		cache: {}, packageCache: {}, fullPaths: false,
		entries: src + outputName
	});
	var watcher = watchify(bundler);
	function bundle() {
		bundleLogger.start(outputName);
		return watcher
			.bundle()
			.pipe(source(outputName))
			.pipe(gulp.dest('./build'))
			.on('end', function() {
				bundleLogger.end(outputName);
			});
	}
	watcher
		.on('update', bundle)
		.on('error', function(err) {
			util.log(util.colors.red('Error: ' + err.message));
			this.end();
		});
	bundleLogger.watch(outputName);
	return bundle();
});

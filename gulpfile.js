var gulp = require('gulp'),
	browserify = require('browserify'),
	watchify = require('watchify'),
	bundleLogger = require('./gulp/bundleLogger'),
	source = require('vinyl-source-stream'),
	browserSync = require('browser-sync').create(),
	requireDir = require('require-dir'),
	util = require('gulp-util'),
	uglify = require('gulp-uglify'),
	buffer = require('vinyl-buffer'),
	rename = require('gulp-rename');

var src = './src/', outputName = 'app.js';

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
				setTimeout(function() {
					browserSync.reload();
				}, 200);
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
gulp.task('build', function() {
	var outputName = 'main.js';
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
			.pipe(buffer())
			.pipe(uglify().on('error', function(err) {
				util.log(util.colors.red('Error: ' + err.message));
			}))
			.pipe(rename('build.js'))
			.pipe(gulp.dest('./'))
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


gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: './build'
		},
		index: 'index.html',
		files: ['./build/*.html', './build/test.js']
	});
});

gulp.task('default', ['watchify', 'browser-sync']);
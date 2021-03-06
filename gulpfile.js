var browserify = require('browserify');
var gulp = require('gulp');
var rename = require('gulp-rename');
var gSourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var reactify = require('reactify');

var src = 'src/';
var output = '../build/';

// Change into the src directory
process.chdir(src);

var createBrowserify = function () {
	return browserify({
		entries: './app.js',
		extensions: ['.jsx'], // Needed to find the React JSX source files.
		transform: [reactify],
		cache: {}, // Required by watchify.
		packageCache: {}, // Required by watchify.
		fullPaths: true
	});
};

var doBrowserify = function (bundle) {
	return bundle.pipe(source('app.js'))
		.pipe(buffer())
		.pipe(gSourcemaps.init({ loadMaps: true }))
		.pipe(rename('bundle.js'))
		.pipe(gSourcemaps.write('./'))
		.pipe(gulp.dest(output));
};

gulp.task('browserify', function () {
	var b = createBrowserify();
	return doBrowserify(b.bundle());
});

gulp.task('copy_direct', function () {
	gulp.src(['**/*.html', '**/*.png', 'favicon.ico', '**/*.css'], {
		buffer: false
	})
		.pipe(gulp.dest(output));
});


// The list of tasks to do by default
var tasklist = ['copy_direct', 'browserify'];

gulp.task('default', (function () {
    return tasklist;
})());

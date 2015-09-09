var gulp 		= require('gulp');
var typescript 	= require('gulp-typescript');
var tslint 		= require('gulp-tslint');
var clean 		= require('del');

var ts_lint_config = {
	configuration: {
		rules: {
			curly: true,
			'no-console': [true, 'debug', 'info'],
			'no-trailing-whitespace': true,
			quotemark: [true, 'single'],
			semicolon: true
		}
	}
};

gulp.task('lint', function() {
	var task	= gulp.src('app/!(typings)/*.ts');

	return task
			.pipe(tslint(ts_lint_config))
        	.pipe(tslint.report('full'));
});

gulp.task('clean', function() {
	var targets = ['./app.bin'];

	clean(targets)
		.then(done);

	function done(paths) {
    	console.log('Deleted folder(s):\n', paths.join('\n'));
	}
});

gulp.task('compile', ['lint', 'clean'], function() {
	var srcFiles	= ['./app/**/*.ts', './typings/**/*.ts'];
	var config      = typescript.createProject('./tsconfig.json');
	var task		= gulp.src(srcFiles);

	return task
			.pipe(typescript(config))
			.js
			.pipe(gulp.dest('./app.bin'));
});

gulp.task('watch', function() {
	return gulp.watch('./app/**/*.ts', ['lint', 'compile']);
});

gulp.task('default', [
	'lint',
	'compile'
]);
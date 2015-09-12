var gulp 		= require('gulp');
var typescript 	= require('gulp-typescript');
var tslint 		= require('gulp-tslint');
var clean 		= require('del');
var merge		= require('merge-stream');

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
	var htmlFiles	= './app/**/*.html';
	var bin			= './app.bin';
	var tsFiles		= ['./app/**/*.ts', './typings/**/*.ts'];
	var config      = typescript.createProject('./tsconfig.json');
	var compile		= gulp.src(tsFiles);
	var copy		= gulp.src(htmlFiles);

	var task1 = copy
					.pipe(gulp.dest(bin));
	var task2 = compile
					.pipe(typescript(config))
					.js
					.pipe(gulp.dest(bin));

	return merge(task1, task2);
});

gulp.task('watch', function() {
	return gulp.watch('./app/**/*.ts', ['lint', 'compile']);
});

gulp.task('default', [
	'lint',
	'compile'
]);
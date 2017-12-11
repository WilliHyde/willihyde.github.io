var gulp = require('gulp'),
	sass = require('gulp-sass'),
	pug = require('gulp-pug'),
	rename = require('gulp-rename'),
	pump = require('pump');

//Styles
gulp.task('styles', function(cb) {
	pump([
		gulp.src('sass/**/*.scss'),
		sass({
			outputStyle: 'compressed',
			errLogToConsole: true
		}),
		rename(function(path) {
			path.basename += ".min";
		}),
		gulp.dest('./css/')
	],
	cb
	);
});

//Pug Templates
gulp.task('templates', function(cb) {
	pump([
		gulp.src('pug/**/*.pug'),
		pug(),
		gulp.dest('./')
	],
	cb
	);
});

//Watch task
gulp.task('default',function() {
	gulp.watch('sass/**/*.scss',['styles']);
	gulp.watch('pug/**/*.pug',['templates']);
});

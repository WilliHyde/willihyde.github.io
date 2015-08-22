var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var rename = require("gulp-rename");

gulp.task('styles', function() {
	gulp.src('sass/**/*.scss')
		.pipe(sass({
			outputStyle: 'compressed',
			errLogToConsole: true
		}))
		.pipe(rename(function(path) {
			path.basename += ".min";
		}))
		.pipe(gulp.dest('./css/'));
});

gulp.task('templates', function() {
	gulp.src('jade/**/*.jade')
		.pipe(jade())
		.pipe(gulp.dest('./'))
});

//Watch task
gulp.task('default',function() {
	gulp.watch('sass/**/*.scss',['styles']);
	gulp.watch('jade/**/*.jade',['templates']);
});
var gulp = require('gulp'),
	plumber = require('gulp-plumber'),
	stylus = require('gulp-stylus'),
	csso = require('gulp-csso'),
	rename = require('gulp-rename'),
	autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function() {
	return gulp.src(['./src/*.styl'])
		.pipe(plumber())
		.pipe(stylus({'include css': true}))
		.pipe(autoprefixer({ browsers: ['last 2 versions', 'ios >= 7','firefox >=4','safari >=7','IE >=8','android >=2'] }))
		.pipe(gulp.dest('./dist/'))
		.pipe(csso())
		.pipe(rename({ extname: '.min.css' }))
		.pipe(gulp.dest('./dist/'))
});
